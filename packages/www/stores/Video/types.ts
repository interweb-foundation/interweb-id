export type Tag = string;

export interface Avatar {
    author: string;
    uploadTime?: string;
}

export interface Video {
    id: string,
    title: string,
    subTitle?: string;
    description?: string;
    videoURL?: string;
    tags?: Tag[];
    avatar?: Avatar;
}

export interface MatchedVideo extends Video {
    wrappedTitle?: string;
    wrappedDescription?: string;
}