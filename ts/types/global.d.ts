declare global {
    interface Window {
        Page: MainPageApi,
    };
    
}
export interface MainPageApi {
    init: () => void,
    change: () => void,
}