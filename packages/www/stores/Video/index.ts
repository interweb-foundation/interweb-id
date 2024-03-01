import { videos } from '../data/videos';
import { makeAutoObservable } from 'mobx';
import { MatchedVideo, Tag, Video } from './types';
import fuzzy from 'fuzzy';

var fuzzyOptions = {
    pre: '<',
    post: '>',
    extract: function (el: Video) { return `${el.title}@%SEP%@${el.description}`; }
};

export class VideoStore {
    selectedTags: Tag[];
    searchText: string;
    videos: Video[];

    constructor() {
        this.selectedTags = [];
        this.searchText = "";
        this.videos = videos;
        makeAutoObservable(this, {}, { autoBind: true });
    };

    get count() {
        return this.videos.length;
    }

    get availableTags() {
        const tag2count = new Map<string, number>();
        this.videos.map(video => {
            if (video.tags) {
                video.tags.forEach(tag => {
                    tag2count.set(tag, (tag2count.get(tag) || 0) + 1);
                })
            }
        })

        const tags = Array.from(tag2count.entries())
            .filter(([, count]) => count !== this.count)
            .map(([tag,]) => tag);

        return tags;
    }

    get selectedVideos(): Video[] {
        if (this.selectedTags.length === 0) {
            return this.videos;
        } else {
            return this.videos.filter(video => {
                const videoTags = video.tags || [];
                return videoTags.some(
                    videoTag => this.selectedTags.some(
                        selectedTag => videoTag === selectedTag
                    )
                )
            })
        }
    }

    get matchedVideos(): MatchedVideo[] {
        if (this.searchText === "") {
            return this.selectedVideos;
        } else {
            const searchResults = fuzzy.filter(this.searchText, this.selectedVideos, fuzzyOptions);
            var matches = searchResults.map(el => {
                const [wrappedTitle, wrappedDescription] = el.string.split('@%SEP%@', 2);
                return {
                    ...el.original,
                    wrappedTitle,
                    wrappedDescription
                }
            });
            return matches;
        }
    }

    setSelectedTags(tags: Tag[]) {
        this.selectedTags = tags;
    }

    setSearchText(text: string) {
        this.searchText = text;
    }
};

export * from './types';