import { VideoStore } from "./Video";


export class RootStore {
    videoStore: VideoStore;

    constructor() {
        this.videoStore = new VideoStore();
    }
}

export function createRootStore() {
    return new RootStore();
}