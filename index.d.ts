import { Component, ComponentClass, Ref, ComponentType } from 'react';
import { ContextProvider } from 'recyclerlistview';

declare module "esoftplay" {
  var _global: any;
  function useGlobalState<S>(initialState?: S, option?: useGlobalOption): useGlobalReturn<S>;
  function useSafeState<S>(initialState?: S | (() => S)): [S, (a: S) => void];
  function applyStyle(style: any): any;
  function usePersistState<S>(key: string, initialState?: S | (() => S)): [S, (a: S) => void, (a?: (x: S)=> void) => void, () => void];
  namespace esp {
    function appjson(): any;
    function assets(path: string): any;
    function dispatch(action: any): any;
    function config(param?: string, ...params: string[]): any;
    function _config(): string | number | boolean;
    function mod(path: string): any;
    function reducer(): any;
    function navigations(): any;
    function isDebug(): boolean;
    function lang(moduleTask: string, langName: string, ...string: string[]): string;
    function langId(): string;
    function connect(mapStateToProps:any,cls:any): any;
    function home(): any;
    function log(message?: any, ...optionalParams: any[]): void;
    function routes(): any;
    function getTokenAsync(callback: (token: string) => void): void;
    function notif(): any;
  }
  interface useGlobalReturn<S> {
      useState: () => [S, (newState: S) => void, () => void],
      get: () => S,
      set: (x: S) => void
    }

  interface useGlobalOption {
    persistKey?: string
  }
interface useCacheData {
    get: () => any,
    set: (data: any) => any
  }
  interface useCacheReturn {
    useCache: () => useCacheData
  }
  function createCache(): useCacheReturn;
  interface ContentAudioProps {
    onRef: (ref: any) => void,
    code: string,
    onStatusChange: (status: any) => void
  }
  interface ContentAudioState {
    playbackInstanceName: string,
    muted: boolean,
    playbackInstancePosition: any,
    playbackInstanceDuration: any,
    shouldPlay: boolean,
    isPlaying: boolean,
    isBuffering: boolean,
    isLoading: boolean,
    volume: number,
  }
  class ContentAudio extends LibComponent<ContentAudioProps, ContentAudioState> {
    constructor(props: ContentAudioProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    _loadNewPlaybackInstance(playing: boolean): Promise<void>;
    _onPlaybackStatusUpdate(status: any): void;
    _onPlayPausePressed(): void;
    render(): any;
  }
  interface ContentCommentProps {
    navigation: any,
    route?: any,
    url?: string,
    id: string,
    url_post?: string,
    user?: any
  }
  interface ContentCommentState {
    user: object,
    url: string,
    url_post: string
  }
  class ContentComment extends LibComponent<ContentCommentProps, ContentCommentState> {
    constructor(props: ContentCommentProps);
    componentDidMount(): void;
    render(): any;
  }
  interface ContentComment_itemProps {
    id: number,
    par_id: string,
    name: string,
    image: string,
    email: string,
    setUser: (user: any) => void,
    website: string,
    content: string,
    date: string,
    reply: string,
    url: string,
    url_post: string,
    user: any
  }
  interface ContentComment_itemState {
    isOpenChild: boolean
  }
  class ContentComment_item extends LibComponent<ContentComment_itemProps, ContentComment_itemState> {
    constructor(props: ContentComment_itemProps);
    render(): any;
  }
  interface ContentComment_listProps {
    par_id: number,
    setUser: (user: any) => void,
    url: any,
    url_post: any,
    user: any,
    style?: any
  }
  interface ContentComment_listState {
    showLogin: boolean,
    total: number,
    isLoading: boolean,
    page: number,
    isStop: boolean,
    isSend: boolean,
    url: any,
    url_post: any,
    user: any,
    data: any[],
    comment: string
  }
  class ContentComment_list extends LibComponent<ContentComment_listProps, ContentComment_listState> {
    constructor(props: ContentComment_listProps);
    componentDidUpdate(prevProps: ContentComment_listProps, prevState: ContentComment_listState): void;
    postComment(): void;
    loadData(): void;
    componentDidMount(): void;
    render(): any;
  }
  interface ContentConfigProps {
    navigation: any
  }
  interface ContentConfigState {
  
  }
  class ContentConfig extends LibComponent<ContentConfigProps, ContentConfigState> {
    static reducer(state: any, action: any): any;
    static setList(config: any): void;
    static setDetail(config: any): void;
    render(): any;
  }
  interface ContentDetailProps {
    url?: string,
    navigation: any,
    id?: number,
    title?: string,
    image?: string,
    created?: string
  }
  interface ContentDetailState {
    scrollY: any,
    toolbarHeight: number,
    result: any,
    images_page: number,
    isPlayingAudio: boolean,
    showModal: boolean,
    view: any,
    isPageReady: boolean,
  }
  class ContentDetail extends LibComponent<ContentDetailProps, ContentDetailState> {
    constructor(props: ContentDetailProps);
    componentDidMount(): void;
    onScrollEnd(e: any): void;
    render(): any;
  }
  interface ContentDetailsProps {
    navigation?: any,
    data: any[],
    id: number,
    title: string,
    url: string,
    created: string,
    image: string,
  }
  interface ContentDetailsState {
    datasToShow: any[],
    id: number
  }
  class ContentDetails extends LibComponent<ContentDetailsProps, ContentDetailsState> {
    constructor(props: ContentDetailsProps);
    componentDidMount(): void;
    getViewableData(initial?: boolean): void;
    componentDidUpdate(prevProps: ContentDetailsProps, prevState: ContentDetailsState): void;
    render(): any;
  }
  interface ContentGalleryArgs {
  
  }
  interface ContentGalleryProps {
  
  }
  function ContentGallery(props: ContentGalleryProps): any;
  namespace ContentGalleryProperty {}
  interface ContentIndexProps {
    navigation: any
  }
  interface ContentIndexState {
  
  }
  class ContentIndex extends LibComponent<ContentIndexProps, ContentIndexState> {
    constructor(props: ContentIndexProps);
    render(): any;
  }
  interface ContentItemProps {
    index: number,
    navigation: any,
    id?: number | string,
    url?: string | "",
    title?: string,
    created?: string,
    image?: string,
    intro?: string,
    description?: string,
    updated?: string,
    publish?: string,
    data?: any[]
  }
  interface ContentItemState {
  
  }
  class ContentItem extends LibComponent<ContentItemProps, ContentItemState> {
    constructor(props: ContentItemProps);
    goToDetail(): void;
    render(): any;
  }
  interface ContentListProps {
    url?: string,
    title?: string,
    dispatch?: any,
    navigation: any
  }
  interface ContentListState {
    animSearch: any,
    url: string,
    urlori: string,
    title: string,
    titleori: string,
    data: any[],
    page: number,
    isDrawerOpen: boolean,
    searchView: boolean,
    isRefreshing: boolean,
    isStop: boolean,
  }
  class ContentList extends LibComponent<ContentListProps, ContentListState> {
    static mapStateToProps(state: any): any;
    constructor(props: ContentListProps);
    loadData(isRefreshing?: boolean): void;
    loadMore(): void;
    doFetch(page?: number, isRefreshing?: boolean): void;
    onRefresh(): void;
    closeDrawer(): void;
    openDrawer(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onBackPress(): boolean;
    componentDidUpdate(prevProps: ContentListProps, prevState: ContentListState): void;
    openSearch(): void;
    closeSearch(): void;
    render(): any;
    _rowRenderer(type: number, item: any): any;
  }
  interface ContentMenuProps {
    url: string,
    navigation?: any,
    closeDrawer: () => void,
    onItemSelected: (item: any) => void,
    style?: any,
    dispatch: any,
    nav: any
  }
  interface ContentMenuState {
    menu: any[],
    selectedId: number
  }
  class ContentMenu extends LibComponent<ContentMenuProps, ContentMenuState> {
    constructor(props: ContentMenuProps);
    saveMenu(menu: any): void;
    loadMenu(callback: (menu: any) => void): void;
    setSelectedId(id: number): void;
    loadData(): void;
    componentDidMount(): void;
    newData(): void;
    render(): any;
  }
  interface ContentSearchProps {
    defaultValue?: string,
    close: () => void,
    onSubmit: (uri: string) => void,
  }
  interface ContentSearchState {
  
  }
  class ContentSearch extends Component<ContentSearchProps, ContentSearchState> {
    constructor(props: ContentSearchProps);
    componentDidMount(): void;
    render(): any;
  }
  interface ContentVideoProps {
    code: string,
    style?: any
  }
  interface ContentVideoState {
  
  }
  class ContentVideo extends LibComponent<ContentVideoProps, ContentVideoState> {
    constructor(props: ContentVideoProps);
    render() : any;
  }
  interface ContentZoomProps {
    navigation: any
  }
  interface ContentZoomState {
    scroll: number
  }
  class ContentZoom extends LibComponent<ContentZoomProps, ContentZoomState> {
    constructor(props: ContentZoomProps);
    render() : any;
  }
  class LibAutoreload {
    static set(callback: () => void, duration?: number): void;
    static clear(): void;
  }
  function LibAutoreload_data(): void;
  namespace LibAutoreload_dataProperty {
    var libAutoreloadData: any;}
  interface LibCarrouselProps {
    children: any,
    autoplay?: boolean,
    delay?: number,
    currentPage?: number,
    style?: any,
    pageStyle?: any,
    contentContainerStyle?: any,
    pageInfo?: boolean,
    pageInfoBackgroundColor?: string,
    pageInfoTextStyle?: any,
    pageInfoBottomContainerStyle?: any,
    pageInfoTextSeparator?: string,
    bullets?: boolean,
    bulletsContainerStyle?: any,
    bulletStyle?: any,
    arrows?: boolean,
    arrowsContainerStyle?: any,
    arrowStyle?: any,
    leftArrowStyle?: any,
    rightArrowStyle?: any,
    leftArrowText?: string,
    rightArrowText?: string,
    chosenBulletStyle?: any,
    onAnimateNextPage?: (currentPage: number) => void,
    onPageBeingChanged?: (nextPage: number) => void,
    swipe?: boolean,
    isLooped?: boolean,
  }
  interface LibCarrouselState {
    currentPage: number,
    size: any,
    childrenLength: number,
  }
  class LibCarrousel extends LibComponent<LibCarrouselProps, LibCarrouselState> {
    constructor(props: LibCarrouselProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: LibCarrouselProps, prevState: LibCarrouselState): void;
    componentWillUnmount(): void;
    _setUpPages(): any;
    getCurrentPage(): number;
    _setCurrentPage(currentPage: number): void;
    _onScrollBegin(): void;
    _onScrollEnd(event: any): void;
    _onScroll(event: any): void;
    _onLayout(event: any): void;
    _clearTimer(): void;
    _setUpTimer(): void;
    _animateNextPage(): void;
    _animatePreviousPage(): void;
    animateToPage(page: number): void;
    _placeCritical(page: number): void;
    _normalizePageNumber(page: number): number;
    _calculateCurrentPage(offset: number): number;
    _calculateNextPage(direction: string): number;
    _renderPageInfo(pageLength: number): any;
    _renderBullets(pageLength: number): any;
    _renderArrows(childrenLength: number): any;
    render(): any;
  }
  interface LibCarrousel_snapProps {
    data: any[]
    align?: 'center' | 'left'
    style?: any,
    maxWidth: number,
    autoCycle?: boolean,
    loop?: boolean,
    autoCycleDelay?: number,
    itemMarginHorizontal: number,
    itemWidth: number,
    onChangePage?: (page: number) => void,
    initialPage?: number,
    renderItem: (item: any, key: number | string, itemWidth: number) => any
  }
  function LibCarrousel_snap(props: LibCarrousel_snapProps): any;
  namespace LibCarrousel_snapProperty {}
  interface LibCollapsProps {
    show?: boolean,
    header: (isShow: boolean) => any,
    children: any,
    style?: any
  }
  interface LibCollapsState {
    expanded: boolean,
    animation: any,
    maxHeight: number,
    minHeight: number,
  }
  class LibCollaps extends LibComponent<LibCollapsProps, LibCollapsState> {
    constructor(props: LibCollapsProps);
    initState(): void;
    toggle(): void;
    _setMaxHeight(event: any): void;
    _setMinHeight(event: any): void;
    render(): any;
  }
  class LibComponent <K, S, U = any> extends Component<K, S, U> {
    constructor(props: any);
    setState(obj: any, callback?: () => void): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    onBackPress(): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
  }
  class LibContext extends ContextProvider {
    constructor(uniqueKey: any);
    getUniqueKey(): any;
    save(key: any, value: any): void;
    get(key: any): any;
    remove(key: any): void;
  }
  class LibCrypt {
    encode(text: string): string;
    decode(text: string): string;
  }
  class LibCurl {
    constructor(uri?: string, post?: any, onDone?: (res: any, msg: string) => void, onFailed?: (msg: string, timeout: boolean) => void, debug?: number);
    setUrl(url: string): void;
    setUri(uri: string): void;
    setApiKey(apiKey: string): void;
    setMaxTimeout(milisecond: number): void;
    setHeader(): Promise<void>;
    onDone(result: any, msg?: string): void;
    onFailed(msg: string, timeout: boolean): void;
    secure(token_uri?: string): (apiKey?: string) => (uri: string, post?: any, onDone?: (res: any, msg: string) => void, onFailed?: (msg: string, timeout: boolean) => void, debug?: number) => void;
    upload(uri: string, postKey: string, fileUri: string, mimeType: string, onDone?: (res: any, msg: string) => void, onFailed?: (msg: string, timeout: boolean) => void, debug?: number): void;
    urlEncode(str: string): string;
    encodeGetValue(_get: string): string;
    signatureBuild(): string;
    custom(uri: string, post?: any, onDone?: (res: any, timeout: boolean) => void, debug?: number): Promise<void>;
    init(uri: string, post?: any, onDone?: (res: any, msg: string) => void, onFailed?: (msg: string, timeout: boolean) => void, debug?: number, upload?: boolean): Promise<void>;
    onFetched(resText: string, onDone?: (res: any, msg: string) => void, onFailed?: (msg: string, timeout: boolean) => void, debug?: number): void;
    onError(msg: string): void;
    getTimeByTimeZone(timeZone: string): number;
    getDayOfYear(d: string): number;
  }
  interface LibDatepickerProps {
    minDate: string,
    maxDate: string,
    monthsDisplay?: string[],
    selectedDate: string,
    onDateChange: (date: string) => void,
    type?: "date" | "month" | "year"
  }
  function LibDatepicker(props: LibDatepickerProps): any;
  namespace LibDatepickerProperty {}
  interface LibDialogProps {
    visible?: boolean,
    style: 'default' | 'danger',
    view?: any,
    icon?: LibIconStyle,
    title?: string,
    msg?: string,
    ok?: string,
    cancel?: string,
    onPressOK?: () => void,
    onPressCancel?: () => void,
  }
  interface LibDialogState {
  
  }
  class LibDialog extends LibComponent<LibDialogProps, LibDialogState> {
    static reducer(state: any, action: any): any;
    static mapStateToProps(state: any): any;
    static hide(): void;
    static info(title: string, msg: string): void;
    static confirm(title: string, msg: string, ok: string, onPressOK: () => void, cancel: string, onPressCancel: () => void): void;
    static warningConfirm(title: string, msg: string, ok: string, onPressOK: () => void, cancel: string, onPressCancel: () => void): void;
    static failed(title: string, msg: string): void;
    static warning(title: string, msg: string): void;
    static show(style: 'default' | 'danger', icon: LibIconStyle, title: string, msg: string, ok?: string, cancel?: string, onPressOK?: () => void, onPressCancel?: () => void): void;
    static custom(view: any): void;
    constructor(props: LibDialogProps);
    handleBack(): boolean;
    componentDidUpdate(prevProps: LibDialogProps, prevState: LibDialogState): void;
    render(): any;
  }
  interface LibDirect_imageSource {
    uri: string
  }
  interface LibDirect_imageProps {
    style?: any
    defaultSource?: LibDirect_imageSource | any,
    resizeMode?: "contain" | "cover",
    onError?: () => void,
  }
  interface LibDirect_imageState {
  
  }
  class LibDirect_image extends LibComponent<LibDirect_imageProps, LibDirect_imageState> {
    constructor(props: LibDirect_imageProps);
    componentDidUpdate(prevProps: LibDirect_imageProps, prevState: LibDirect_imageState): void;
    setSource(source: any): void;
    render(): any;
  }
  interface LibDirect_textProps {
    style?: any,
    initialText?: string
  }
  interface LibDirect_textState {
  
  }
  class LibDirect_text extends LibComponent<LibDirect_textProps, LibDirect_textState> {
    constructor(props: LibDirect_textProps);
    setText(text: string): void;
    render(): any;
  }
  class LibDocument {
    static pick(mimeType?: string): Promise<any>;
    static upload(mimeType?: string): Promise<string>;
  }
  interface LibEffectProps {
    deps?: any[]
  }
  interface LibEffectState {
  
  }
  class LibEffect extends LibComponent<LibEffectProps, LibEffectState> {
    componentDidMount(): void;
    shouldComponentUpdate(): boolean;
    render(): any;
  }
  interface LibFocusProps {
    isFocused?: boolean
    blurView?: any,
    onFocus?: () => void,
    onBlur?: () => void,
    style?: any
    children?: any
  }
  interface LibFocusState {
  
  }
  function LibFocus(props: LibFocusProps): any;
  namespace LibFocusProperty {}
  type ic1 = "access-point" | "access-point-network" | "access-point-network-off" | "account" | "account-alert" | "account-alert-outline" | "account-arrow-left" | "account-arrow-left-outline" | "account-arrow-right" | "account-arrow-right-outline" | "account-badge" | "account-badge-alert" | "account-badge-alert-outline" | "account-badge-outline" | "account-box" | "account-box-multiple" | "account-box-outline" | "account-card-details" | "account-card-details-outline" | "account-check" | "account-check-outline" | "account-child" | "account-child-circle" | "account-circle" | "account-circle-outline" | "account-clock" | "account-clock-outline" | "account-convert" | "account-details" | "account-edit" | "account-group" | "account-group-outline" | "account-heart" | "account-heart-outline" | "account-key" | "account-key-outline" | "account-minus" | "account-minus-outline" | "account-multiple" | "account-multiple-check" | "account-multiple-minus" | "account-multiple-minus-outline" | "account-multiple-outline" | "account-multiple-plus" | "account-multiple-plus-outline" | "account-network" | "account-network-outline" | "account-off" | "account-off-outline" | "account-outline" | "account-plus" | "account-plus-outline" | "account-question" | "account-question-outline" | "account-remove" | "account-remove-outline" | "account-search" | "account-search-outline" | "account-settings" | "account-star" | "account-star-outline" | "account-supervisor" | "account-supervisor-circle" | "account-switch" | "account-tie" | "accusoft" | "adchoices" | "adjust" | "adobe" | "air-conditioner" | "air-filter" | "air-horn" | "air-purifier" | "airbag" | "airballoon" | "airplane" | "airplane-landing" | "airplane-off" | "airplane-takeoff" | "airplay" | "airport" | "alarm" | "alarm-bell"
  type ic2 = "alarm-check" | "alarm-light" | "alarm-light-outline" | "alarm-multiple" | "alarm-off" | "alarm-plus" | "alarm-snooze" | "album" | "alert" | "alert-box" | "alert-box-outline" | "alert-circle" | "alert-circle-outline" | "alert-decagram" | "alert-decagram-outline" | "alert-octagon" | "alert-octagon-outline" | "alert-octagram" | "alert-octagram-outline" | "alert-outline" | "alien" | "all-inclusive" | "alpha" | "alpha-a" | "alpha-a-box" | "alpha-a-box-outline" | "alpha-a-circle" | "alpha-a-circle-outline" | "alpha-b" | "alpha-b-box" | "alpha-b-box-outline" | "alpha-b-circle" | "alpha-b-circle-outline" | "alpha-c" | "alpha-c-box" | "alpha-c-box-outline" | "alpha-c-circle" | "alpha-c-circle-outline" | "alpha-d" | "alpha-d-box" | "alpha-d-box-outline" | "alpha-d-circle" | "alpha-d-circle-outline" | "alpha-e" | "alpha-e-box" | "alpha-e-box-outline" | "alpha-e-circle" | "alpha-e-circle-outline" | "alpha-f" | "alpha-f-box" | "alpha-f-box-outline" | "alpha-f-circle" | "alpha-f-circle-outline" | "alpha-g" | "alpha-g-box" | "alpha-g-box-outline" | "alpha-g-circle" | "alpha-g-circle-outline" | "alpha-h" | "alpha-h-box" | "alpha-h-box-outline" | "alpha-h-circle" | "alpha-h-circle-outline" | "alpha-i" | "alpha-i-box" | "alpha-i-box-outline" | "alpha-i-circle" | "alpha-i-circle-outline" | "alpha-j" | "alpha-j-box" | "alpha-j-box-outline" | "alpha-j-circle" | "alpha-j-circle-outline" | "alpha-k" | "alpha-k-box" | "alpha-k-box-outline" | "alpha-k-circle" | "alpha-k-circle-outline" | "alpha-l" | "alpha-l-box" | "alpha-l-box-outline" | "alpha-l-circle" | "alpha-l-circle-outline" | "alpha-m" | "alpha-m-box" | "alpha-m-box-outline" | "alpha-m-circle" | "alpha-m-circle-outline" | "alpha-n" | "alpha-n-box" | "alpha-n-box-outline" | "alpha-n-circle"
  type ic3 = "alpha-n-circle-outline" | "alpha-o" | "alpha-o-box" | "alpha-o-box-outline" | "alpha-o-circle" | "alpha-o-circle-outline" | "alpha-p" | "alpha-p-box" | "alpha-p-box-outline" | "alpha-p-circle" | "alpha-p-circle-outline" | "alpha-q" | "alpha-q-box" | "alpha-q-box-outline" | "alpha-q-circle" | "alpha-q-circle-outline" | "alpha-r" | "alpha-r-box" | "alpha-r-box-outline" | "alpha-r-circle" | "alpha-r-circle-outline" | "alpha-s" | "alpha-s-box" | "alpha-s-box-outline" | "alpha-s-circle" | "alpha-s-circle-outline" | "alpha-t" | "alpha-t-box" | "alpha-t-box-outline" | "alpha-t-circle" | "alpha-t-circle-outline" | "alpha-u" | "alpha-u-box" | "alpha-u-box-outline" | "alpha-u-circle" | "alpha-u-circle-outline" | "alpha-v" | "alpha-v-box" | "alpha-v-box-outline" | "alpha-v-circle" | "alpha-v-circle-outline" | "alpha-w" | "alpha-w-box" | "alpha-w-box-outline" | "alpha-w-circle" | "alpha-w-circle-outline" | "alpha-x" | "alpha-x-box" | "alpha-x-box-outline" | "alpha-x-circle" | "alpha-x-circle-outline" | "alpha-y" | "alpha-y-box" | "alpha-y-box-outline" | "alpha-y-circle" | "alpha-y-circle-outline" | "alpha-z" | "alpha-z-box" | "alpha-z-box-outline" | "alpha-z-circle" | "alpha-z-circle-outline" | "alphabetical" | "altimeter" | "amazon" | "amazon-alexa" | "amazon-drive" | "ambulance" | "ammunition" | "ampersand" | "amplifier" | "anchor" | "android" | "android-auto" | "android-debug-bridge" | "android-head" | "android-messages" | "android-studio" | "angle-acute" | "angle-obtuse" | "angle-right" | "angular" | "angularjs" | "animation" | "animation-outline" | "animation-play" | "animation-play-outline" | "anvil" | "apple" | "apple-finder" | "apple-icloud" | "apple-ios" | "apple-keyboard-caps" | "apple-keyboard-command" | "apple-keyboard-control"
  type ic4 = "apple-keyboard-option" | "apple-keyboard-shift" | "apple-safari" | "application" | "application-export" | "application-import" | "apps" | "apps-box" | "arch" | "archive" | "arrange-bring-forward" | "arrange-bring-to-front" | "arrange-send-backward" | "arrange-send-to-back" | "arrow-all" | "arrow-bottom-left" | "arrow-bottom-left-bold-outline" | "arrow-bottom-left-thick" | "arrow-bottom-right" | "arrow-bottom-right-bold-outline" | "arrow-bottom-right-thick" | "arrow-collapse" | "arrow-collapse-all" | "arrow-collapse-down" | "arrow-collapse-horizontal" | "arrow-collapse-left" | "arrow-collapse-right" | "arrow-collapse-up" | "arrow-collapse-vertical" | "arrow-decision" | "arrow-decision-auto" | "arrow-decision-auto-outline" | "arrow-decision-outline" | "arrow-down" | "arrow-down-bold" | "arrow-down-bold-box" | "arrow-down-bold-box-outline" | "arrow-down-bold-circle" | "arrow-down-bold-circle-outline" | "arrow-down-bold-hexagon-outline" | "arrow-down-bold-outline" | "arrow-down-box" | "arrow-down-circle" | "arrow-down-circle-outline" | "arrow-down-drop-circle" | "arrow-down-drop-circle-outline" | "arrow-down-thick" | "arrow-expand" | "arrow-expand-all" | "arrow-expand-down" | "arrow-expand-horizontal" | "arrow-expand-left" | "arrow-expand-right" | "arrow-expand-up" | "arrow-expand-vertical" | "arrow-left" | "arrow-left-bold" | "arrow-left-bold-box" | "arrow-left-bold-box-outline" | "arrow-left-bold-circle" | "arrow-left-bold-circle-outline" | "arrow-left-bold-hexagon-outline" | "arrow-left-bold-outline" | "arrow-left-box" | "arrow-left-circle" | "arrow-left-circle-outline" | "arrow-left-drop-circle" | "arrow-left-drop-circle-outline" | "arrow-left-right-bold-outline" | "arrow-left-thick" | "arrow-right" | "arrow-right-bold" | "arrow-right-bold-box"
  type ic5 = "arrow-right-bold-box-outline" | "arrow-right-bold-circle" | "arrow-right-bold-circle-outline" | "arrow-right-bold-hexagon-outline" | "arrow-right-bold-outline" | "arrow-right-box" | "arrow-right-circle" | "arrow-right-circle-outline" | "arrow-right-drop-circle" | "arrow-right-drop-circle-outline" | "arrow-right-thick" | "arrow-split-horizontal" | "arrow-split-vertical" | "arrow-top-left" | "arrow-top-left-bold-outline" | "arrow-top-left-thick" | "arrow-top-right" | "arrow-top-right-bold-outline" | "arrow-top-right-thick" | "arrow-up" | "arrow-up-bold" | "arrow-up-bold-box" | "arrow-up-bold-box-outline" | "arrow-up-bold-circle" | "arrow-up-bold-circle-outline" | "arrow-up-bold-hexagon-outline" | "arrow-up-bold-outline" | "arrow-up-box" | "arrow-up-circle" | "arrow-up-circle-outline" | "arrow-up-down-bold-outline" | "arrow-up-drop-circle" | "arrow-up-drop-circle-outline" | "arrow-up-thick" | "artist" | "artist-outline" | "artstation" | "aspect-ratio" | "assistant" | "asterisk" | "at" | "atlassian" | "atm" | "atom" | "attachment" | "audio-video" | "audiobook" | "augmented-reality" | "auto-fix" | "auto-upload" | "autorenew" | "av-timer" | "axe" | "axis" | "axis-arrow" | "axis-arrow-lock" | "axis-lock" | "axis-x-arrow" | "axis-x-arrow-lock" | "axis-x-rotate-clockwise" | "axis-x-rotate-counterclockwise" | "axis-x-y-arrow-lock" | "axis-y-arrow" | "axis-y-arrow-lock" | "axis-y-rotate-clockwise" | "axis-y-rotate-counterclockwise" | "axis-z-arrow" | "axis-z-arrow-lock" | "axis-z-rotate-clockwise" | "axis-z-rotate-counterclockwise" | "azure" | "babel" | "baby" | "baby-buggy" | "backburger" | "backspace" | "backspace-outline" | "backup-restore" | "badminton" | "balloon" | "ballot" | "ballot-outline" | "ballot-recount" | "ballot-recount-outline" | "bandage"
  type ic6 = "bandcamp" | "bank" | "bank-minus" | "bank-plus" | "bank-remove" | "bank-transfer" | "bank-transfer-in" | "bank-transfer-out" | "barcode" | "barcode-scan" | "barley" | "barley-off" | "barn" | "barrel" | "baseball" | "baseball-bat" | "basecamp" | "basket" | "basket-fill" | "basket-unfill" | "basketball" | "basketball-hoop" | "basketball-hoop-outline" | "bat" | "battery" | "battery-10" | "battery-10-bluetooth" | "battery-20" | "battery-20-bluetooth" | "battery-30" | "battery-30-bluetooth" | "battery-40" | "battery-40-bluetooth" | "battery-50" | "battery-50-bluetooth" | "battery-60" | "battery-60-bluetooth" | "battery-70" | "battery-70-bluetooth" | "battery-80" | "battery-80-bluetooth" | "battery-90" | "battery-90-bluetooth" | "battery-alert" | "battery-alert-bluetooth" | "battery-bluetooth" | "battery-bluetooth-variant" | "battery-charging" | "battery-charging-10" | "battery-charging-100" | "battery-charging-20" | "battery-charging-30" | "battery-charging-40" | "battery-charging-50" | "battery-charging-60" | "battery-charging-70" | "battery-charging-80" | "battery-charging-90" | "battery-charging-outline" | "battery-charging-wireless" | "battery-charging-wireless-10" | "battery-charging-wireless-20" | "battery-charging-wireless-30" | "battery-charging-wireless-40" | "battery-charging-wireless-50" | "battery-charging-wireless-60" | "battery-charging-wireless-70" | "battery-charging-wireless-80" | "battery-charging-wireless-90" | "battery-charging-wireless-alert" | "battery-charging-wireless-outline" | "battery-minus" | "battery-negative" | "battery-outline" | "battery-plus" | "battery-positive" | "battery-unknown" | "battery-unknown-bluetooth" | "battlenet" | "beach" | "beaker" | "beaker-outline" | "beats" | "bed-empty" | "beer" | "behance" | "bell"
  type ic7 = "bell-alert" | "bell-circle" | "bell-circle-outline" | "bell-off" | "bell-off-outline" | "bell-outline" | "bell-plus" | "bell-plus-outline" | "bell-ring" | "bell-ring-outline" | "bell-sleep" | "bell-sleep-outline" | "beta" | "betamax" | "bible" | "bike" | "billiards" | "billiards-rack" | "bing" | "binoculars" | "bio" | "biohazard" | "bitbucket" | "bitcoin" | "black-mesa" | "blackberry" | "blender" | "blender-software" | "blinds" | "block-helper" | "blogger" | "blood-bag" | "bluetooth" | "bluetooth-audio" | "bluetooth-connect" | "bluetooth-off" | "bluetooth-settings" | "bluetooth-transfer" | "blur" | "blur-linear" | "blur-off" | "blur-radial" | "bolnisi-cross" | "bolt" | "bomb" | "bomb-off" | "bone" | "book" | "book-lock" | "book-lock-open" | "book-minus" | "book-multiple" | "book-multiple-minus" | "book-multiple-plus" | "book-multiple-remove" | "book-multiple-variant" | "book-open" | "book-open-outline" | "book-open-page-variant" | "book-open-variant" | "book-outline" | "book-plus" | "book-remove" | "book-variant" | "bookmark" | "bookmark-check" | "bookmark-minus" | "bookmark-minus-outline" | "bookmark-music" | "bookmark-off" | "bookmark-off-outline" | "bookmark-outline" | "bookmark-plus" | "bookmark-plus-outline" | "bookmark-remove" | "boombox" | "bootstrap" | "border-all" | "border-all-variant" | "border-bottom" | "border-bottom-variant" | "border-color" | "border-horizontal" | "border-inside" | "border-left" | "border-left-variant" | "border-none" | "border-none-variant" | "border-outside" | "border-right" | "border-right-variant" | "border-style" | "border-top" | "border-top-variant" | "border-vertical" | "bottle-wine" | "bow-tie" | "bowl" | "bowling" | "box" | "box-cutter" | "box-shadow" | "boxing-glove" | "braille" | "brain" | "bread-slice"
  type ic8 = "bread-slice-outline" | "bridge" | "briefcase" | "briefcase-account" | "briefcase-account-outline" | "briefcase-check" | "briefcase-download" | "briefcase-download-outline" | "briefcase-edit" | "briefcase-edit-outline" | "briefcase-minus" | "briefcase-minus-outline" | "briefcase-outline" | "briefcase-plus" | "briefcase-plus-outline" | "briefcase-remove" | "briefcase-remove-outline" | "briefcase-search" | "briefcase-search-outline" | "briefcase-upload" | "briefcase-upload-outline" | "brightness-1" | "brightness-2" | "brightness-3" | "brightness-4" | "brightness-5" | "brightness-6" | "brightness-7" | "brightness-auto" | "brightness-percent" | "broom" | "brush" | "buddhism" | "buffer" | "bug" | "bug-check" | "bug-check-outline" | "bug-outline" | "bugle" | "bulldozer" | "bullet" | "bulletin-board" | "bullhorn" | "bullhorn-outline" | "bullseye" | "bullseye-arrow" | "bus" | "bus-alert" | "bus-articulated-end" | "bus-articulated-front" | "bus-clock" | "bus-double-decker" | "bus-school" | "bus-side" | "cached" | "cactus" | "cake" | "cake-layered" | "cake-variant" | "calculator" | "calculator-variant" | "calendar" | "calendar-alert" | "calendar-blank" | "calendar-blank-outline" | "calendar-check" | "calendar-check-outline" | "calendar-clock" | "calendar-edit" | "calendar-export" | "calendar-heart" | "calendar-import" | "calendar-minus" | "calendar-multiple" | "calendar-multiple-check" | "calendar-multiselect" | "calendar-outline" | "calendar-plus" | "calendar-question" | "calendar-range" | "calendar-range-outline" | "calendar-remove" | "calendar-remove-outline" | "calendar-search" | "calendar-star" | "calendar-text" | "calendar-text-outline" | "calendar-today" | "calendar-week" | "calendar-week-begin" | "call-made" | "call-merge" | "call-missed" | "call-received"
  type ic9 = "call-split" | "camcorder" | "camcorder-box" | "camcorder-box-off" | "camcorder-off" | "camera" | "camera-account" | "camera-burst" | "camera-control" | "camera-enhance" | "camera-enhance-outline" | "camera-front" | "camera-front-variant" | "camera-gopro" | "camera-image" | "camera-iris" | "camera-metering-center" | "camera-metering-matrix" | "camera-metering-partial" | "camera-metering-spot" | "camera-off" | "camera-outline" | "camera-party-mode" | "camera-rear" | "camera-rear-variant" | "camera-switch" | "camera-timer" | "camera-wireless" | "camera-wireless-outline" | "cancel" | "candle" | "candycane" | "cannabis" | "caps-lock" | "car" | "car-battery" | "car-brake-abs" | "car-brake-alert" | "car-brake-hold" | "car-brake-parking" | "car-connected" | "car-convertible" | "car-cruise-control" | "car-defrost-front" | "car-defrost-rear" | "car-door" | "car-electric" | "car-esp" | "car-estate" | "car-hatchback" | "car-key" | "car-light-dimmed" | "car-light-fog" | "car-light-high" | "car-limousine" | "car-multiple" | "car-parking-lights" | "car-pickup" | "car-side" | "car-sports" | "car-tire-alert" | "car-traction-control" | "car-wash" | "caravan" | "card" | "card-bulleted" | "card-bulleted-off" | "card-bulleted-off-outline" | "card-bulleted-outline" | "card-bulleted-settings" | "card-bulleted-settings-outline" | "card-outline" | "card-text" | "card-text-outline" | "cards" | "cards-club" | "cards-diamond" | "cards-heart" | "cards-outline" | "cards-playing-outline" | "cards-spade" | "cards-variant" | "carrot" | "carry-on-bag-check" | "cart" | "cart-arrow-down" | "cart-arrow-right" | "cart-arrow-up" | "cart-minus" | "cart-off" | "cart-outline" | "cart-plus" | "cart-remove" | "case-sensitive-alt" | "cash" | "cash-100" | "cash-marker" | "cash-multiple" | "cash-refund"
  type ic10 = "cash-register" | "cash-usd" | "cassette" | "cast" | "cast-connected" | "cast-off" | "castle" | "cat" | "cctv" | "ceiling-light" | "cellphone" | "cellphone-android" | "cellphone-arrow-down" | "cellphone-basic" | "cellphone-dock" | "cellphone-erase" | "cellphone-iphone" | "cellphone-key" | "cellphone-link" | "cellphone-link-off" | "cellphone-lock" | "cellphone-message" | "cellphone-off" | "cellphone-screenshot" | "cellphone-settings" | "cellphone-settings-variant" | "cellphone-sound" | "cellphone-text" | "cellphone-wireless" | "celtic-cross" | "certificate" | "chair-school" | "charity" | "chart-arc" | "chart-areaspline" | "chart-bar" | "chart-bar-stacked" | "chart-bell-curve" | "chart-bubble" | "chart-donut" | "chart-donut-variant" | "chart-gantt" | "chart-histogram" | "chart-line" | "chart-line-stacked" | "chart-line-variant" | "chart-multiline" | "chart-pie" | "chart-scatterplot-hexbin" | "chart-timeline" | "chat" | "chat-alert" | "chat-processing" | "check" | "check-all" | "check-box-multiple-outline" | "check-box-outline" | "check-circle" | "check-circle-outline" | "check-decagram" | "check-network" | "check-network-outline" | "check-outline" | "checkbook" | "checkbox-blank" | "checkbox-blank-circle" | "checkbox-blank-circle-outline" | "checkbox-blank-outline" | "checkbox-intermediate" | "checkbox-marked" | "checkbox-marked-circle" | "checkbox-marked-circle-outline" | "checkbox-marked-outline" | "checkbox-multiple-blank" | "checkbox-multiple-blank-circle" | "checkbox-multiple-blank-circle-outline" | "checkbox-multiple-blank-outline" | "checkbox-multiple-marked" | "checkbox-multiple-marked-circle" | "checkbox-multiple-marked-circle-outline" | "checkbox-multiple-marked-outline" | "checkerboard" | "chef-hat" | "chemical-weapon" | "chess-bishop" | "chess-king"
  type ic11 = "chess-knight" | "chess-pawn" | "chess-queen" | "chess-rook" | "chevron-double-down" | "chevron-double-left" | "chevron-double-right" | "chevron-double-up" | "chevron-down" | "chevron-down-box" | "chevron-down-box-outline" | "chevron-down-circle" | "chevron-down-circle-outline" | "chevron-left" | "chevron-left-box" | "chevron-left-box-outline" | "chevron-left-circle" | "chevron-left-circle-outline" | "chevron-right" | "chevron-right-box" | "chevron-right-box-outline" | "chevron-right-circle" | "chevron-right-circle-outline" | "chevron-triple-down" | "chevron-triple-left" | "chevron-triple-right" | "chevron-triple-up" | "chevron-up" | "chevron-up-box" | "chevron-up-box-outline" | "chevron-up-circle" | "chevron-up-circle-outline" | "chili-hot" | "chili-medium" | "chili-mild" | "chip" | "christianity" | "christianity-outline" | "church" | "circle" | "circle-edit-outline" | "circle-medium" | "circle-outline" | "circle-slice-1" | "circle-slice-2" | "circle-slice-3" | "circle-slice-4" | "circle-slice-5" | "circle-slice-6" | "circle-slice-7" | "circle-slice-8" | "circle-small" | "cisco-webex" | "city" | "city-variant" | "city-variant-outline" | "clipboard" | "clipboard-account" | "clipboard-account-outline" | "clipboard-alert" | "clipboard-alert-outline" | "clipboard-arrow-down" | "clipboard-arrow-down-outline" | "clipboard-arrow-left" | "clipboard-arrow-left-outline" | "clipboard-arrow-right" | "clipboard-arrow-right-outline" | "clipboard-arrow-up" | "clipboard-arrow-up-outline" | "clipboard-check" | "clipboard-check-outline" | "clipboard-flow" | "clipboard-outline" | "clipboard-play" | "clipboard-play-outline" | "clipboard-plus" | "clipboard-pulse" | "clipboard-pulse-outline" | "clipboard-text" | "clipboard-text-outline" | "clipboard-text-play" | "clipboard-text-play-outline"
  type ic12 = "clippy" | "clock" | "clock-alert" | "clock-alert-outline" | "clock-end" | "clock-fast" | "clock-in" | "clock-out" | "clock-outline" | "clock-start" | "close" | "close-box" | "close-box-multiple" | "close-box-multiple-outline" | "close-box-outline" | "close-circle" | "close-circle-outline" | "close-network" | "close-network-outline" | "close-octagon" | "close-octagon-outline" | "close-outline" | "closed-caption" | "closed-caption-outline" | "cloud" | "cloud-alert" | "cloud-braces" | "cloud-check" | "cloud-circle" | "cloud-download" | "cloud-download-outline" | "cloud-off-outline" | "cloud-outline" | "cloud-print" | "cloud-print-outline" | "cloud-question" | "cloud-search" | "cloud-search-outline" | "cloud-sync" | "cloud-tags" | "cloud-upload" | "cloud-upload-outline" | "clover" | "code-array" | "code-braces" | "code-brackets" | "code-equal" | "code-greater-than" | "code-greater-than-or-equal" | "code-less-than" | "code-less-than-or-equal" | "code-not-equal" | "code-not-equal-variant" | "code-parentheses" | "code-string" | "code-tags" | "code-tags-check" | "codepen" | "coffee" | "coffee-outline" | "coffee-to-go" | "coffin" | "cogs" | "coin" | "coins" | "collage" | "collapse-all" | "collapse-all-outline" | "color-helper" | "comment" | "comment-account" | "comment-account-outline" | "comment-alert" | "comment-alert-outline" | "comment-arrow-left" | "comment-arrow-left-outline" | "comment-arrow-right" | "comment-arrow-right-outline" | "comment-check" | "comment-check-outline" | "comment-eye" | "comment-eye-outline" | "comment-multiple" | "comment-multiple-outline" | "comment-outline" | "comment-plus" | "comment-plus-outline" | "comment-processing" | "comment-processing-outline" | "comment-question" | "comment-question-outline" | "comment-remove"
  type ic13 = "comment-remove-outline" | "comment-search" | "comment-search-outline" | "comment-text" | "comment-text-multiple" | "comment-text-multiple-outline" | "comment-text-outline" | "compare" | "compass" | "compass-off" | "compass-off-outline" | "compass-outline" | "console" | "console-line" | "console-network" | "console-network-outline" | "contact-mail" | "contactless-payment" | "contacts" | "contain" | "contain-end" | "contain-start" | "content-copy" | "content-cut" | "content-duplicate" | "content-paste" | "content-save" | "content-save-all" | "content-save-edit" | "content-save-edit-outline" | "content-save-outline" | "content-save-settings" | "content-save-settings-outline" | "contrast" | "contrast-box" | "contrast-circle" | "controller-classic" | "controller-classic-outline" | "cookie" | "copyright" | "cordova" | "corn" | "counter" | "cow" | "crane" | "creation" | "creative-commons" | "credit-card" | "credit-card-marker" | "credit-card-multiple" | "credit-card-off" | "credit-card-plus" | "credit-card-refund" | "credit-card-scan" | "credit-card-settings" | "credit-card-wireless" | "cricket" | "crop" | "crop-free" | "crop-landscape" | "crop-portrait" | "crop-rotate" | "crop-square" | "crosshairs" | "crosshairs-gps" | "crown" | "cryengine" | "crystal-ball" | "cube" | "cube-outline" | "cube-scan" | "cube-send" | "cube-unfolded" | "cup" | "cup-off" | "cup-water" | "cupcake" | "curling" | "currency-bdt" | "currency-brl" | "currency-btc" | "currency-chf" | "currency-cny" | "currency-eth" | "currency-eur" | "currency-gbp" | "currency-ils" | "currency-inr" | "currency-jpy" | "currency-krw" | "currency-kzt" | "currency-ngn" | "currency-php" | "currency-rub" | "currency-sign" | "currency-try" | "currency-twd" | "currency-usd" | "currency-usd-off" | "current-ac"
  type ic14 = "current-dc" | "cursor-default" | "cursor-default-click" | "cursor-default-click-outline" | "cursor-default-outline" | "cursor-move" | "cursor-pointer" | "cursor-text" | "database" | "database-check" | "database-edit" | "database-export" | "database-import" | "database-lock" | "database-minus" | "database-plus" | "database-refresh" | "database-remove" | "database-search" | "database-settings" | "death-star" | "death-star-variant" | "deathly-hallows" | "debian" | "debug-step-into" | "debug-step-out" | "debug-step-over" | "decagram" | "decagram-outline" | "decimal-decrease" | "decimal-increase" | "delete" | "delete-circle" | "delete-circle-outline" | "delete-empty" | "delete-forever" | "delete-forever-outline" | "delete-outline" | "delete-restore" | "delete-sweep" | "delete-sweep-outline" | "delete-variant" | "delta" | "desk-lamp" | "deskphone" | "desktop-classic" | "desktop-mac" | "desktop-mac-dashboard" | "desktop-tower" | "desktop-tower-monitor" | "details" | "dev-to" | "developer-board" | "deviantart" | "dialpad" | "diameter" | "diameter-outline" | "diameter-variant" | "diamond" | "diamond-outline" | "diamond-stone" | "dice-1" | "dice-2" | "dice-3" | "dice-4" | "dice-5" | "dice-6" | "dice-d10" | "dice-d12" | "dice-d20" | "dice-d4" | "dice-d6" | "dice-d8" | "dice-multiple" | "dictionary" | "dip-switch" | "directions" | "directions-fork" | "disc" | "disc-alert" | "disc-player" | "discord" | "dishwasher" | "disqus" | "disqus-outline" | "diving-flippers" | "diving-helmet" | "diving-scuba" | "diving-scuba-flag" | "diving-scuba-tank" | "diving-scuba-tank-multiple" | "diving-snorkel" | "division" | "division-box" | "dlna" | "dna" | "dns" | "dns-outline" | "do-not-disturb" | "do-not-disturb-off" | "docker" | "doctor" | "dog" | "dog-service" | "dog-side"
  type ic15 = "dolby" | "domain" | "domain-off" | "donkey" | "door" | "door-closed" | "door-open" | "doorbell-video" | "dot-net" | "dots-horizontal" | "dots-horizontal-circle" | "dots-horizontal-circle-outline" | "dots-vertical" | "dots-vertical-circle" | "dots-vertical-circle-outline" | "douban" | "download" | "download-multiple" | "download-network" | "download-network-outline" | "download-outline" | "drag" | "drag-horizontal" | "drag-variant" | "drag-vertical" | "drama-masks" | "drawing" | "drawing-box" | "dribbble" | "dribbble-box" | "drone" | "dropbox" | "drupal" | "duck" | "dumbbell" | "dump-truck" | "ear-hearing" | "ear-hearing-off" | "earth" | "earth-box" | "earth-box-off" | "earth-off" | "edge" | "egg" | "egg-easter" | "eight-track" | "eject" | "eject-outline" | "elephant" | "elevation-decline" | "elevation-rise" | "elevator" | "email" | "email-alert" | "email-box" | "email-check" | "email-check-outline" | "email-lock" | "email-mark-as-unread" | "email-open" | "email-open-outline" | "email-outline" | "email-plus" | "email-plus-outline" | "email-search" | "email-search-outline" | "email-variant" | "ember" | "emby" | "emoticon" | "emoticon-angry" | "emoticon-angry-outline" | "emoticon-cool" | "emoticon-cool-outline" | "emoticon-cry" | "emoticon-cry-outline" | "emoticon-dead" | "emoticon-dead-outline" | "emoticon-devil" | "emoticon-devil-outline" | "emoticon-excited" | "emoticon-excited-outline" | "emoticon-happy" | "emoticon-happy-outline" | "emoticon-kiss" | "emoticon-kiss-outline" | "emoticon-neutral" | "emoticon-neutral-outline" | "emoticon-outline" | "emoticon-poop" | "emoticon-poop-outline" | "emoticon-sad" | "emoticon-sad-outline" | "emoticon-tongue" | "emoticon-tongue-outline" | "emoticon-wink" | "emoticon-wink-outline" | "engine" | "engine-off"
  type ic16 = "engine-off-outline" | "engine-outline" | "equal" | "equal-box" | "eraser" | "eraser-variant" | "escalator" | "eslint" | "et" | "ethereum" | "ethernet" | "ethernet-cable" | "ethernet-cable-off" | "etsy" | "ev-station" | "eventbrite" | "evernote" | "exclamation" | "exit-run" | "exit-to-app" | "expand-all" | "expand-all-outline" | "exponent" | "exponent-box" | "export" | "export-variant" | "eye" | "eye-check" | "eye-check-outline" | "eye-circle" | "eye-circle-outline" | "eye-off" | "eye-off-outline" | "eye-outline" | "eye-plus" | "eye-plus-outline" | "eye-settings" | "eye-settings-outline" | "eyedropper" | "eyedropper-variant" | "face" | "face-agent" | "face-outline" | "face-profile" | "face-recognition" | "facebook" | "facebook-box" | "facebook-messenger" | "facebook-workplace" | "factory" | "fan" | "fan-off" | "fast-forward" | "fast-forward-10" | "fast-forward-30" | "fast-forward-outline" | "fax" | "feather" | "feature-search" | "feature-search-outline" | "fedora" | "ferry" | "file" | "file-account" | "file-alert" | "file-alert-outline" | "file-cabinet" | "file-cancel" | "file-cancel-outline" | "file-chart" | "file-check" | "file-cloud" | "file-compare" | "file-delimited" | "file-document" | "file-document-box" | "file-document-box-multiple" | "file-document-box-multiple-outline" | "file-document-box-outline" | "file-document-edit" | "file-document-edit-outline" | "file-document-outline" | "file-download" | "file-download-outline" | "file-excel" | "file-excel-box" | "file-export" | "file-eye" | "file-eye-outline" | "file-find" | "file-find-outline" | "file-hidden" | "file-image" | "file-import" | "file-lock" | "file-move" | "file-multiple" | "file-music" | "file-outline" | "file-pdf" | "file-pdf-box" | "file-percent" | "file-plus" | "file-powerpoint"
  type ic17 = "file-powerpoint-box" | "file-presentation-box" | "file-question" | "file-remove" | "file-replace" | "file-replace-outline" | "file-restore" | "file-search" | "file-search-outline" | "file-send" | "file-table" | "file-table-outline" | "file-tree" | "file-undo" | "file-upload" | "file-upload-outline" | "file-video" | "file-word" | "file-word-box" | "file-xml" | "film" | "filmstrip" | "filmstrip-off" | "filter" | "filter-outline" | "filter-remove" | "filter-remove-outline" | "filter-variant" | "finance" | "find-replace" | "fingerprint" | "fire" | "fire-truck" | "firebase" | "firefox" | "fish" | "flag" | "flag-checkered" | "flag-minus" | "flag-outline" | "flag-plus" | "flag-remove" | "flag-triangle" | "flag-variant" | "flag-variant-outline" | "flare" | "flash" | "flash-auto" | "flash-circle" | "flash-off" | "flash-outline" | "flash-red-eye" | "flashlight" | "flashlight-off" | "flask" | "flask-empty" | "flask-empty-outline" | "flask-outline" | "flattr" | "flickr" | "flip-to-back" | "flip-to-front" | "floor-lamp" | "floor-plan" | "floppy" | "floppy-variant" | "flower" | "flower-outline" | "flower-poppy" | "flower-tulip" | "flower-tulip-outline" | "folder" | "folder-account" | "folder-account-outline" | "folder-alert" | "folder-alert-outline" | "folder-clock" | "folder-clock-outline" | "folder-download" | "folder-edit" | "folder-edit-outline" | "folder-google-drive" | "folder-image" | "folder-key" | "folder-key-network" | "folder-key-network-outline" | "folder-lock" | "folder-lock-open" | "folder-move" | "folder-multiple" | "folder-multiple-image" | "folder-multiple-outline" | "folder-network" | "folder-network-outline" | "folder-open" | "folder-open-outline" | "folder-outline" | "folder-plus" | "folder-plus-outline" | "folder-pound" | "folder-pound-outline"
  type ic18 = "folder-remove" | "folder-remove-outline" | "folder-search" | "folder-search-outline" | "folder-star" | "folder-star-outline" | "folder-sync" | "folder-sync-outline" | "folder-text" | "folder-text-outline" | "folder-upload" | "font-awesome" | "food" | "food-apple" | "food-apple-outline" | "food-croissant" | "food-fork-drink" | "food-off" | "food-variant" | "football" | "football-australian" | "football-helmet" | "forklift" | "format-align-bottom" | "format-align-center" | "format-align-justify" | "format-align-left" | "format-align-middle" | "format-align-right" | "format-align-top" | "format-annotation-minus" | "format-annotation-plus" | "format-bold" | "format-clear" | "format-color-fill" | "format-color-text" | "format-columns" | "format-float-center" | "format-float-left" | "format-float-none" | "format-float-right" | "format-font" | "format-font-size-decrease" | "format-font-size-increase" | "format-header-1" | "format-header-2" | "format-header-3" | "format-header-4" | "format-header-5" | "format-header-6" | "format-header-decrease" | "format-header-equal" | "format-header-increase" | "format-header-pound" | "format-horizontal-align-center" | "format-horizontal-align-left" | "format-horizontal-align-right" | "format-indent-decrease" | "format-indent-increase" | "format-italic" | "format-letter-case" | "format-letter-case-lower" | "format-letter-case-upper" | "format-line-spacing" | "format-line-style" | "format-line-weight" | "format-list-bulleted" | "format-list-bulleted-square" | "format-list-bulleted-type" | "format-list-checkbox" | "format-list-checks" | "format-list-numbered" | "format-list-numbered-rtl" | "format-page-break" | "format-paint" | "format-paragraph" | "format-pilcrow" | "format-quote-close" | "format-quote-open" | "format-rotate-90"
  type ic19 = "format-section" | "format-size" | "format-strikethrough" | "format-strikethrough-variant" | "format-subscript" | "format-superscript" | "format-text" | "format-text-rotation-down" | "format-text-rotation-none" | "format-text-wrapping-clip" | "format-text-wrapping-overflow" | "format-text-wrapping-wrap" | "format-textbox" | "format-textdirection-l-to-r" | "format-textdirection-r-to-l" | "format-title" | "format-underline" | "format-vertical-align-bottom" | "format-vertical-align-center" | "format-vertical-align-top" | "format-wrap-inline" | "format-wrap-square" | "format-wrap-tight" | "format-wrap-top-bottom" | "forum" | "forum-outline" | "forward" | "forwardburger" | "fountain" | "fountain-pen" | "fountain-pen-tip" | "foursquare" | "freebsd" | "fridge" | "fridge-bottom" | "fridge-outline" | "fridge-top" | "fuel" | "fullscreen" | "fullscreen-exit" | "function" | "function-variant" | "fuse" | "fuse-blade" | "gamepad" | "gamepad-variant" | "gantry-crane" | "garage" | "garage-alert" | "garage-open" | "gas-cylinder" | "gas-station" | "gate" | "gate-and" | "gate-nand" | "gate-nor" | "gate-not" | "gate-or" | "gate-xnor" | "gate-xor" | "gauge" | "gauge-empty" | "gauge-full" | "gauge-low" | "gavel" | "gender-female" | "gender-male" | "gender-male-female" | "gender-transgender" | "gentoo" | "gesture" | "gesture-double-tap" | "gesture-pinch" | "gesture-spread" | "gesture-swipe" | "gesture-swipe-down" | "gesture-swipe-horizontal" | "gesture-swipe-left" | "gesture-swipe-right" | "gesture-swipe-up" | "gesture-swipe-vertical" | "gesture-tap" | "gesture-tap-hold" | "gesture-two-double-tap" | "gesture-two-tap" | "ghost" | "ghost-off" | "gif" | "gift" | "git" | "github-box" | "github-circle" | "github-face" | "gitlab" | "glass-cocktail" | "glass-flute" | "glass-mug" | "glass-stange"
  type ic20 = "glass-tulip" | "glass-wine" | "glassdoor" | "glasses" | "globe-model" | "gmail" | "gnome" | "go-kart" | "go-kart-track" | "gog" | "golf" | "gondola" | "goodreads" | "google" | "google-adwords" | "google-allo" | "google-analytics" | "google-assistant" | "google-cardboard" | "google-chrome" | "google-circles" | "google-circles-communities" | "google-circles-extended" | "google-circles-group" | "google-classroom" | "google-controller" | "google-controller-off" | "google-drive" | "google-earth" | "google-fit" | "google-glass" | "google-hangouts" | "google-home" | "google-keep" | "google-lens" | "google-maps" | "google-nearby" | "google-pages" | "google-photos" | "google-physical-web" | "google-play" | "google-plus" | "google-plus-box" | "google-spreadsheet" | "google-street-view" | "google-translate" | "gpu" | "gradient" | "grain" | "graphql" | "grave-stone" | "grease-pencil" | "greater-than" | "greater-than-or-equal" | "grid" | "grid-large" | "grid-off" | "group" | "guitar-acoustic" | "guitar-electric" | "guitar-pick" | "guitar-pick-outline" | "guy-fawkes-mask" | "hackernews" | "hail" | "halloween" | "hamburger" | "hammer" | "hand" | "hand-okay" | "hand-peace" | "hand-peace-variant" | "hand-pointing-down" | "hand-pointing-left" | "hand-pointing-right" | "hand-pointing-up" | "hanger" | "hard-hat" | "harddisk" | "hat-fedora" | "hazard-lights" | "hdr" | "hdr-off" | "headphones" | "headphones-bluetooth" | "headphones-box" | "headphones-off" | "headphones-settings" | "headset" | "headset-dock" | "headset-off" | "heart" | "heart-box" | "heart-box-outline" | "heart-broken" | "heart-broken-outline" | "heart-circle" | "heart-circle-outline" | "heart-half" | "heart-half-full" | "heart-half-outline" | "heart-multiple" | "heart-multiple-outline" | "heart-off" | "heart-outline"
  type ic21 = "heart-pulse" | "helicopter" | "help" | "help-box" | "help-circle" | "help-circle-outline" | "help-network" | "help-network-outline" | "help-rhombus" | "help-rhombus-outline" | "hexagon" | "hexagon-multiple" | "hexagon-outline" | "hexagon-slice-1" | "hexagon-slice-2" | "hexagon-slice-3" | "hexagon-slice-4" | "hexagon-slice-5" | "hexagon-slice-6" | "hexagram" | "hexagram-outline" | "high-definition" | "high-definition-box" | "highway" | "hiking" | "hinduism" | "history" | "hockey-puck" | "hockey-sticks" | "hololens" | "home" | "home-account" | "home-alert" | "home-assistant" | "home-automation" | "home-circle" | "home-city" | "home-city-outline" | "home-currency-usd" | "home-floor-0" | "home-floor-1" | "home-floor-2" | "home-floor-3" | "home-floor-a" | "home-floor-b" | "home-floor-g" | "home-floor-l" | "home-floor-negative-1" | "home-group" | "home-heart" | "home-lock" | "home-lock-open" | "home-map-marker" | "home-minus" | "home-modern" | "home-outline" | "home-plus" | "home-variant" | "home-variant-outline" | "hook" | "hook-off" | "hops" | "horseshoe" | "hospital" | "hospital-building" | "hospital-marker" | "hot-tub" | "hotel" | "houzz" | "houzz-box" | "hubspot" | "hulu" | "human" | "human-child" | "human-female" | "human-female-boy" | "human-female-female" | "human-female-girl" | "human-greeting" | "human-handsdown" | "human-handsup" | "human-male" | "human-male-boy" | "human-male-female" | "human-male-girl" | "human-male-male" | "human-pregnant" | "humble-bundle" | "ice-cream" | "iframe" | "iframe-outline" | "image" | "image-album" | "image-area" | "image-area-close" | "image-broken" | "image-broken-variant" | "image-filter" | "image-filter-black-white" | "image-filter-center-focus" | "image-filter-center-focus-weak" | "image-filter-drama" | "image-filter-frames"
  type ic22 = "image-filter-hdr" | "image-filter-none" | "image-filter-tilt-shift" | "image-filter-vintage" | "image-move" | "image-multiple" | "image-off" | "image-outline" | "image-plus" | "image-search" | "image-search-outline" | "image-size-select-actual" | "image-size-select-large" | "image-size-select-small" | "import" | "inbox" | "inbox-arrow-down" | "inbox-arrow-up" | "inbox-multiple" | "inbox-multiple-outline" | "incognito" | "infinity" | "information" | "information-outline" | "information-variant" | "instagram" | "instapaper" | "internet-explorer" | "invert-colors" | "ip" | "ip-network" | "ip-network-outline" | "ipod" | "islam" | "itunes" | "jabber" | "jeepney" | "jira" | "jquery" | "jsfiddle" | "json" | "judaism" | "kabaddi" | "karate" | "keg" | "kettle" | "key" | "key-change" | "key-minus" | "key-outline" | "key-plus" | "key-remove" | "key-variant" | "keyboard" | "keyboard-backspace" | "keyboard-caps" | "keyboard-close" | "keyboard-off" | "keyboard-outline" | "keyboard-return" | "keyboard-settings" | "keyboard-settings-outline" | "keyboard-tab" | "keyboard-variant" | "kickstarter" | "knife" | "knife-military" | "kodi" | "label" | "label-off" | "label-off-outline" | "label-outline" | "label-variant" | "label-variant-outline" | "ladybug" | "lambda" | "lamp" | "lan" | "lan-connect" | "lan-disconnect" | "lan-pending" | "language-c" | "language-cpp" | "language-csharp" | "language-css3" | "language-go" | "language-haskell" | "language-html5" | "language-java" | "language-javascript" | "language-lua" | "language-php" | "language-python" | "language-python-text" | "language-r" | "language-ruby-on-rails" | "language-swift" | "language-typescript" | "laptop" | "laptop-chromebook" | "laptop-mac" | "laptop-off" | "laptop-windows" | "laravel" | "lastfm" | "lastpass" | "launch"
  type ic23 = "lava-lamp" | "layers" | "layers-off" | "layers-off-outline" | "layers-outline" | "lead-pencil" | "leaf" | "leaf-maple" | "leak" | "leak-off" | "led-off" | "led-on" | "led-outline" | "led-strip" | "led-variant-off" | "led-variant-on" | "led-variant-outline" | "less-than" | "less-than-or-equal" | "library" | "library-books" | "library-movie" | "library-music" | "library-plus" | "library-shelves" | "library-video" | "lifebuoy" | "light-switch" | "lightbulb" | "lightbulb-on" | "lightbulb-on-outline" | "lightbulb-outline" | "lighthouse" | "lighthouse-on" | "link" | "link-box" | "link-box-outline" | "link-box-variant" | "link-box-variant-outline" | "link-off" | "link-plus" | "link-variant" | "link-variant-off" | "linkedin" | "linkedin-box" | "linux" | "linux-mint" | "litecoin" | "loading" | "lock" | "lock-alert" | "lock-clock" | "lock-open" | "lock-open-outline" | "lock-outline" | "lock-pattern" | "lock-plus" | "lock-question" | "lock-reset" | "lock-smart" | "locker" | "locker-multiple" | "login" | "login-variant" | "logout" | "logout-variant" | "looks" | "loop" | "loupe" | "lumx" | "lyft" | "magnet" | "magnet-on" | "magnify" | "magnify-close" | "magnify-minus" | "magnify-minus-cursor" | "magnify-minus-outline" | "magnify-plus" | "magnify-plus-cursor" | "magnify-plus-outline" | "mail-ru" | "mailbox" | "mailbox-open" | "mailbox-open-outline" | "mailbox-open-up" | "mailbox-open-up-outline" | "mailbox-outline" | "mailbox-up" | "mailbox-up-outline" | "map" | "map-clock" | "map-clock-outline" | "map-legend" | "map-marker" | "map-marker-check" | "map-marker-circle" | "map-marker-distance" | "map-marker-minus" | "map-marker-multiple" | "map-marker-off" | "map-marker-outline" | "map-marker-path" | "map-marker-plus" | "map-marker-radius" | "map-minus" | "map-outline" | "map-plus"
  type ic24 = "map-search" | "map-search-outline" | "mapbox" | "margin" | "markdown" | "marker" | "marker-cancel" | "marker-check" | "mastodon" | "mastodon-variant" | "material-design" | "material-ui" | "math-compass" | "math-cos" | "math-sin" | "math-tan" | "matrix" | "maxcdn" | "medal" | "medical-bag" | "medium" | "meetup" | "memory" | "menu" | "menu-down" | "menu-down-outline" | "menu-left" | "menu-left-outline" | "menu-open" | "menu-right" | "menu-right-outline" | "menu-swap" | "menu-swap-outline" | "menu-up" | "menu-up-outline" | "message" | "message-alert" | "message-alert-outline" | "message-bulleted" | "message-bulleted-off" | "message-draw" | "message-image" | "message-outline" | "message-plus" | "message-processing" | "message-reply" | "message-reply-text" | "message-settings" | "message-settings-variant" | "message-text" | "message-text-outline" | "message-video" | "meteor" | "metronome" | "metronome-tick" | "micro-sd" | "microphone" | "microphone-minus" | "microphone-off" | "microphone-outline" | "microphone-plus" | "microphone-settings" | "microphone-variant" | "microphone-variant-off" | "microscope" | "microsoft" | "microsoft-dynamics" | "microwave" | "midi" | "midi-port" | "mine" | "minecraft" | "mini-sd" | "minidisc" | "minus" | "minus-box" | "minus-box-outline" | "minus-circle" | "minus-circle-outline" | "minus-network" | "minus-network-outline" | "mixcloud" | "mixed-martial-arts" | "mixed-reality" | "mixer" | "molecule" | "monitor" | "monitor-cellphone" | "monitor-cellphone-star" | "monitor-dashboard" | "monitor-lock" | "monitor-multiple" | "monitor-off" | "monitor-star" | "more" | "mother-nurse" | "motion-sensor" | "motorbike" | "mouse" | "mouse-bluetooth" | "mouse-off" | "mouse-variant" | "mouse-variant-off" | "move-resize" | "move-resize-variant" | "movie"
  type ic25 = "movie-outline" | "movie-roll" | "muffin" | "multiplication" | "multiplication-box" | "mushroom" | "mushroom-outline" | "music" | "music-box" | "music-box-outline" | "music-circle" | "music-circle-outline" | "music-note" | "music-note-bluetooth" | "music-note-bluetooth-off" | "music-note-eighth" | "music-note-half" | "music-note-off" | "music-note-plus" | "music-note-quarter" | "music-note-sixteenth" | "music-note-whole" | "music-off" | "nail" | "nas" | "nativescript" | "nature" | "nature-people" | "navigation" | "near-me" | "needle" | "netflix" | "network" | "network-off" | "network-off-outline" | "network-outline" | "network-strength-1" | "network-strength-1-alert" | "network-strength-2" | "network-strength-2-alert" | "network-strength-3" | "network-strength-3-alert" | "network-strength-4" | "network-strength-4-alert" | "network-strength-off" | "network-strength-off-outline" | "network-strength-outline" | "new-box" | "newspaper" | "nfc" | "nfc-tap" | "nfc-variant" | "ninja" | "nintendo-switch" | "nodejs" | "not-equal" | "not-equal-variant" | "note" | "note-multiple" | "note-multiple-outline" | "note-outline" | "note-plus" | "note-plus-outline" | "note-text" | "notebook" | "notification-clear-all" | "npm" | "npm-variant" | "npm-variant-outline" | "nuke" | "null" | "numeric" | "numeric-0" | "numeric-0-box" | "numeric-0-box-multiple-outline" | "numeric-0-box-outline" | "numeric-0-circle" | "numeric-0-circle-outline" | "numeric-1" | "numeric-1-box" | "numeric-1-box-multiple-outline" | "numeric-1-box-outline" | "numeric-1-circle" | "numeric-1-circle-outline" | "numeric-2" | "numeric-2-box" | "numeric-2-box-multiple-outline" | "numeric-2-box-outline" | "numeric-2-circle" | "numeric-2-circle-outline" | "numeric-3" | "numeric-3-box" | "numeric-3-box-multiple-outline"
  type ic26 = "numeric-3-box-outline" | "numeric-3-circle" | "numeric-3-circle-outline" | "numeric-4" | "numeric-4-box" | "numeric-4-box-multiple-outline" | "numeric-4-box-outline" | "numeric-4-circle" | "numeric-4-circle-outline" | "numeric-5" | "numeric-5-box" | "numeric-5-box-multiple-outline" | "numeric-5-box-outline" | "numeric-5-circle" | "numeric-5-circle-outline" | "numeric-6" | "numeric-6-box" | "numeric-6-box-multiple-outline" | "numeric-6-box-outline" | "numeric-6-circle" | "numeric-6-circle-outline" | "numeric-7" | "numeric-7-box" | "numeric-7-box-multiple-outline" | "numeric-7-box-outline" | "numeric-7-circle" | "numeric-7-circle-outline" | "numeric-8" | "numeric-8-box" | "numeric-8-box-multiple-outline" | "numeric-8-box-outline" | "numeric-8-circle" | "numeric-8-circle-outline" | "numeric-9" | "numeric-9-box" | "numeric-9-box-multiple-outline" | "numeric-9-box-outline" | "numeric-9-circle" | "numeric-9-circle-outline" | "numeric-9-plus-box" | "numeric-9-plus-box-multiple-outline" | "numeric-9-plus-box-outline" | "numeric-9-plus-circle" | "numeric-9-plus-circle-outline" | "nut" | "nutrition" | "oar" | "ocarina" | "octagon" | "octagon-outline" | "octagram" | "octagram-outline" | "odnoklassniki" | "office" | "office-building" | "oil" | "oil-temperature" | "omega" | "one-up" | "onedrive" | "onenote" | "onepassword" | "opacity" | "open-in-app" | "open-in-new" | "open-source-initiative" | "openid" | "opera" | "orbit" | "origin" | "ornament" | "ornament-variant" | "outlook" | "owl" | "pac-man" | "package" | "package-down" | "package-up" | "package-variant" | "package-variant-closed" | "page-first" | "page-last" | "page-layout-body" | "page-layout-footer" | "page-layout-header" | "page-layout-sidebar-left" | "page-layout-sidebar-right" | "page-next" | "page-next-outline"
  type ic27 = "page-previous" | "page-previous-outline" | "palette" | "palette-advanced" | "palette-outline" | "palette-swatch" | "pan" | "pan-bottom-left" | "pan-bottom-right" | "pan-down" | "pan-horizontal" | "pan-left" | "pan-right" | "pan-top-left" | "pan-top-right" | "pan-up" | "pan-vertical" | "panda" | "pandora" | "panorama" | "panorama-fisheye" | "panorama-horizontal" | "panorama-vertical" | "panorama-wide-angle" | "paper-cut-vertical" | "paperclip" | "parachute" | "parachute-outline" | "parking" | "passport" | "passport-biometric" | "patreon" | "pause" | "pause-circle" | "pause-circle-outline" | "pause-octagon" | "pause-octagon-outline" | "paw" | "paw-off" | "paypal" | "peace" | "pen" | "pen-lock" | "pen-minus" | "pen-off" | "pen-plus" | "pen-remove" | "pencil" | "pencil-box" | "pencil-box-outline" | "pencil-circle" | "pencil-circle-outline" | "pencil-lock" | "pencil-lock-outline" | "pencil-minus" | "pencil-minus-outline" | "pencil-off" | "pencil-off-outline" | "pencil-outline" | "pencil-plus" | "pencil-plus-outline" | "pencil-remove" | "pencil-remove-outline" | "pentagon" | "pentagon-outline" | "percent" | "periodic-table" | "periodic-table-co2" | "periscope" | "perspective-less" | "perspective-more" | "pharmacy" | "phone" | "phone-bluetooth" | "phone-classic" | "phone-forward" | "phone-hangup" | "phone-in-talk" | "phone-incoming" | "phone-lock" | "phone-log" | "phone-minus" | "phone-missed" | "phone-off" | "phone-outgoing" | "phone-outline" | "phone-paused" | "phone-plus" | "phone-return" | "phone-rotate-landscape" | "phone-rotate-portrait" | "phone-settings" | "phone-voip" | "pi" | "pi-box" | "pi-hole" | "piano" | "pickaxe" | "pier" | "pier-crane" | "pig" | "pill" | "pillar" | "pin" | "pin-off" | "pin-off-outline" | "pin-outline" | "pine-tree" | "pine-tree-box"
  type ic28 = "pinterest" | "pinterest-box" | "pinwheel" | "pinwheel-outline" | "pipe" | "pipe-disconnected" | "pipe-leak" | "pirate" | "pistol" | "piston" | "pizza" | "play" | "play-box-outline" | "play-circle" | "play-circle-outline" | "play-network" | "play-network-outline" | "play-pause" | "play-protected-content" | "play-speed" | "playlist-check" | "playlist-edit" | "playlist-minus" | "playlist-music" | "playlist-music-outline" | "playlist-play" | "playlist-plus" | "playlist-remove" | "playlist-star" | "playstation" | "plex" | "plus" | "plus-box" | "plus-box-outline" | "plus-circle" | "plus-circle-multiple-outline" | "plus-circle-outline" | "plus-minus" | "plus-minus-box" | "plus-network" | "plus-network-outline" | "plus-one" | "plus-outline" | "pocket" | "podcast" | "podium" | "podium-bronze" | "podium-gold" | "podium-silver" | "point-of-sale" | "pokeball" | "pokemon-go" | "poker-chip" | "polaroid" | "poll" | "poll-box" | "polymer" | "pool" | "popcorn" | "postage-stamp" | "pot" | "pot-mix" | "pound" | "pound-box" | "power" | "power-cycle" | "power-off" | "power-on" | "power-plug" | "power-plug-off" | "power-settings" | "power-sleep" | "power-socket" | "power-socket-au" | "power-socket-eu" | "power-socket-uk" | "power-socket-us" | "power-standby" | "powershell" | "prescription" | "presentation" | "presentation-play" | "printer" | "printer-3d" | "printer-alert" | "printer-settings" | "printer-wireless" | "priority-high" | "priority-low" | "professional-hexagon" | "progress-alert" | "progress-check" | "progress-clock" | "progress-download" | "progress-upload" | "progress-wrench" | "projector" | "projector-screen" | "publish" | "pulse" | "pumpkin" | "puzzle" | "puzzle-outline" | "qi" | "qqchat" | "qrcode" | "qrcode-edit" | "qrcode-scan" | "quadcopter" | "quality-high"
  type ic29 = "quality-low" | "quality-medium" | "quicktime" | "quora" | "rabbit" | "racing-helmet" | "racquetball" | "radar" | "radiator" | "radiator-disabled" | "radiator-off" | "radio" | "radio-am" | "radio-fm" | "radio-handheld" | "radio-tower" | "radioactive" | "radiobox-blank" | "radiobox-marked" | "radius" | "radius-outline" | "raspberry-pi" | "ray-end" | "ray-end-arrow" | "ray-start" | "ray-start-arrow" | "ray-start-end" | "ray-vertex" | "react" | "read" | "receipt" | "record" | "record-player" | "record-rec" | "recycle" | "reddit" | "redo" | "redo-variant" | "reflect-horizontal" | "reflect-vertical" | "refresh" | "regex" | "registered-trademark" | "relative-scale" | "reload" | "reminder" | "remote" | "remote-desktop" | "rename-box" | "reorder-horizontal" | "reorder-vertical" | "repeat" | "repeat-off" | "repeat-once" | "replay" | "reply" | "reply-all" | "reproduction" | "resistor" | "resistor-nodes" | "resize" | "resize-bottom-right" | "responsive" | "restart" | "restart-off" | "restore" | "restore-clock" | "rewind" | "rewind-10" | "rewind-30" | "rewind-outline" | "rhombus" | "rhombus-medium" | "rhombus-outline" | "rhombus-split" | "ribbon" | "rice" | "ring" | "road" | "road-variant" | "robot" | "robot-industrial" | "robot-vacuum" | "robot-vacuum-variant" | "rocket" | "roller-skate" | "rollerblade" | "rollupjs" | "room-service" | "room-service-outline" | "rotate-3d" | "rotate-left" | "rotate-left-variant" | "rotate-orbit" | "rotate-right" | "rotate-right-variant" | "rounded-corner" | "router-wireless" | "router-wireless-settings" | "routes" | "rowing" | "rss" | "rss-box" | "ruby" | "rugby" | "ruler" | "ruler-square" | "run" | "run-fast" | "sack" | "sack-percent" | "safe" | "safety-goggles" | "sale" | "salesforce" | "sass" | "satellite" | "satellite-uplink"
  type ic30 = "satellite-variant" | "sausage" | "saxophone" | "scale" | "scale-balance" | "scale-bathroom" | "scanner" | "scanner-off" | "school" | "scissors-cutting" | "screen-rotation" | "screen-rotation-lock" | "screw-flat-top" | "screw-lag" | "screw-machine-flat-top" | "screw-machine-round-top" | "screw-round-top" | "screwdriver" | "script" | "script-outline" | "script-text" | "script-text-outline" | "sd" | "seal" | "search-web" | "seat" | "seat-flat" | "seat-flat-angled" | "seat-individual-suite" | "seat-legroom-extra" | "seat-legroom-normal" | "seat-legroom-reduced" | "seat-outline" | "seat-recline-extra" | "seat-recline-normal" | "seatbelt" | "security" | "security-network" | "select" | "select-all" | "select-color" | "select-compare" | "select-drag" | "select-inverse" | "select-off" | "selection" | "selection-drag" | "selection-ellipse" | "selection-off" | "send" | "send-circle" | "send-circle-outline" | "send-lock" | "serial-port" | "server" | "server-minus" | "server-network" | "server-network-off" | "server-off" | "server-plus" | "server-remove" | "server-security" | "set-all" | "set-center" | "set-center-right" | "set-left" | "set-left-center" | "set-left-right" | "set-none" | "set-right" | "set-top-box" | "settings" | "settings-box" | "settings-helper" | "settings-outline" | "shape" | "shape-circle-plus" | "shape-outline" | "shape-plus" | "shape-polygon-plus" | "shape-rectangle-plus" | "shape-square-plus" | "share" | "share-outline" | "share-variant" | "sheep" | "shield" | "shield-account" | "shield-account-outline" | "shield-airplane" | "shield-airplane-outline" | "shield-check" | "shield-check-outline" | "shield-cross" | "shield-cross-outline" | "shield-half-full" | "shield-home" | "shield-home-outline" | "shield-key" | "shield-key-outline" | "shield-link-variant"
  type ic31 = "shield-link-variant-outline" | "shield-lock" | "shield-lock-outline" | "shield-off" | "shield-off-outline" | "shield-outline" | "shield-plus" | "shield-plus-outline" | "shield-remove" | "shield-remove-outline" | "shield-search" | "ship-wheel" | "shoe-formal" | "shoe-heel" | "shoe-print" | "shopify" | "shopping" | "shopping-music" | "shovel" | "shovel-off" | "shower" | "shower-head" | "shredder" | "shuffle" | "shuffle-disabled" | "shuffle-variant" | "sigma" | "sigma-lower" | "sign-caution" | "sign-direction" | "sign-text" | "signal" | "signal-2g" | "signal-3g" | "signal-4g" | "signal-5g" | "signal-cellular-1" | "signal-cellular-2" | "signal-cellular-3" | "signal-cellular-outline" | "signal-hspa" | "signal-hspa-plus" | "signal-off" | "signal-variant" | "signature" | "signature-freehand" | "signature-image" | "signature-text" | "silo" | "silverware" | "silverware-fork" | "silverware-fork-knife" | "silverware-spoon" | "silverware-variant" | "sim" | "sim-alert" | "sim-off" | "sina-weibo" | "sitemap" | "skate" | "skew-less" | "skew-more" | "skip-backward" | "skip-forward" | "skip-next" | "skip-next-circle" | "skip-next-circle-outline" | "skip-previous" | "skip-previous-circle" | "skip-previous-circle-outline" | "skull" | "skull-crossbones" | "skull-crossbones-outline" | "skull-outline" | "skype" | "skype-business" | "slack" | "slackware" | "sleep" | "sleep-off" | "slope-downhill" | "slope-uphill" | "smog" | "smoke-detector" | "smoking" | "smoking-off" | "snapchat" | "snowflake" | "snowman" | "soccer" | "soccer-field" | "sofa" | "solar-panel" | "solar-panel-large" | "solar-power" | "solid" | "sort" | "sort-alphabetical" | "sort-ascending" | "sort-descending" | "sort-numeric" | "sort-variant" | "sort-variant-lock" | "sort-variant-lock-open" | "soundcloud" | "source-branch"
  type ic32 = "source-commit" | "source-commit-end" | "source-commit-end-local" | "source-commit-local" | "source-commit-next-local" | "source-commit-start" | "source-commit-start-next-local" | "source-fork" | "source-merge" | "source-pull" | "source-repository" | "source-repository-multiple" | "soy-sauce" | "spa" | "spa-outline" | "space-invaders" | "speaker" | "speaker-bluetooth" | "speaker-multiple" | "speaker-off" | "speaker-wireless" | "speedometer" | "spellcheck" | "spider-web" | "spotify" | "spotlight" | "spotlight-beam" | "spray" | "spray-bottle" | "square" | "square-edit-outline" | "square-inc" | "square-inc-cash" | "square-medium" | "square-medium-outline" | "square-outline" | "square-root" | "square-root-box" | "square-small" | "squeegee" | "ssh" | "stack-exchange" | "stack-overflow" | "stadium" | "stairs" | "stamper" | "standard-definition" | "star" | "star-box" | "star-box-outline" | "star-circle" | "star-circle-outline" | "star-face" | "star-four-points" | "star-four-points-outline" | "star-half" | "star-off" | "star-outline" | "star-three-points" | "star-three-points-outline" | "steam" | "steam-box" | "steering" | "steering-off" | "step-backward" | "step-backward-2" | "step-forward" | "step-forward-2" | "stethoscope" | "sticker" | "sticker-emoji" | "stocking" | "stop" | "stop-circle" | "stop-circle-outline" | "store" | "store-24-hour" | "stove" | "strava" | "subdirectory-arrow-left" | "subdirectory-arrow-right" | "subtitles" | "subtitles-outline" | "subway" | "subway-alert-variant" | "subway-variant" | "summit" | "sunglasses" | "surround-sound" | "surround-sound-2-0" | "surround-sound-3-1" | "surround-sound-5-1" | "surround-sound-7-1" | "svg" | "swap-horizontal" | "swap-horizontal-bold" | "swap-horizontal-variant" | "swap-vertical" | "swap-vertical-bold"
  type ic33 = "swap-vertical-variant" | "swim" | "switch" | "sword" | "sword-cross" | "symfony" | "sync" | "sync-alert" | "sync-off" | "tab" | "tab-minus" | "tab-plus" | "tab-remove" | "tab-unselected" | "table" | "table-border" | "table-column" | "table-column-plus-after" | "table-column-plus-before" | "table-column-remove" | "table-column-width" | "table-edit" | "table-large" | "table-merge-cells" | "table-of-contents" | "table-plus" | "table-remove" | "table-row" | "table-row-height" | "table-row-plus-after" | "table-row-plus-before" | "table-row-remove" | "table-search" | "table-settings" | "tablet" | "tablet-android" | "tablet-cellphone" | "tablet-ipad" | "taco" | "tag" | "tag-faces" | "tag-heart" | "tag-heart-outline" | "tag-minus" | "tag-multiple" | "tag-outline" | "tag-plus" | "tag-remove" | "tag-text-outline" | "tank" | "tape-measure" | "target" | "target-account" | "target-variant" | "taxi" | "tea" | "tea-outline" | "teach" | "teamviewer" | "telegram" | "telescope" | "television" | "television-box" | "television-classic" | "television-classic-off" | "television-guide" | "television-off" | "temperature-celsius" | "temperature-fahrenheit" | "temperature-kelvin" | "tennis" | "tennis-ball" | "tent" | "terrain" | "test-tube" | "test-tube-empty" | "test-tube-off" | "text" | "text-shadow" | "text-short" | "text-subject" | "text-to-speech" | "text-to-speech-off" | "textbox" | "textbox-password" | "texture" | "theater" | "theme-light-dark" | "thermometer" | "thermometer-alert" | "thermometer-chevron-down" | "thermometer-chevron-up" | "thermometer-lines" | "thermometer-minus" | "thermometer-plus" | "thermostat" | "thermostat-box" | "thought-bubble" | "thought-bubble-outline" | "thumb-down" | "thumb-down-outline" | "thumb-up" | "thumb-up-outline" | "thumbs-up-down"
  type ic34 = "ticket" | "ticket-account" | "ticket-confirmation" | "ticket-outline" | "ticket-percent" | "tie" | "tilde" | "timelapse" | "timeline" | "timeline-outline" | "timeline-text" | "timeline-text-outline" | "timer" | "timer-10" | "timer-3" | "timer-off" | "timer-sand" | "timer-sand-empty" | "timer-sand-full" | "timetable" | "toaster-oven" | "toggle-switch" | "toggle-switch-off" | "toggle-switch-off-outline" | "toggle-switch-outline" | "toilet" | "toolbox" | "toolbox-outline" | "tooltip" | "tooltip-account" | "tooltip-edit" | "tooltip-image" | "tooltip-image-outline" | "tooltip-outline" | "tooltip-plus" | "tooltip-plus-outline" | "tooltip-text" | "tooltip-text-outline" | "tooth" | "tooth-outline" | "tor" | "tortoise" | "tournament" | "tower-beach" | "tower-fire" | "towing" | "track-light" | "trackpad" | "trackpad-lock" | "tractor" | "trademark" | "traffic-light" | "train" | "train-car" | "train-variant" | "tram" | "transcribe" | "transcribe-close" | "transfer-down" | "transfer-left" | "transfer-right" | "transfer-up" | "transit-connection" | "transit-connection-variant" | "transit-transfer" | "transition" | "transition-masked" | "translate" | "translate-off" | "transmission-tower" | "trash-can" | "trash-can-outline" | "treasure-chest" | "tree" | "trello" | "trending-down" | "trending-neutral" | "trending-up" | "triangle" | "triangle-outline" | "triforce" | "trophy" | "trophy-award" | "trophy-broken" | "trophy-outline" | "trophy-variant" | "trophy-variant-outline" | "truck" | "truck-check" | "truck-delivery" | "truck-fast" | "truck-trailer" | "tshirt-crew" | "tshirt-crew-outline" | "tshirt-v" | "tshirt-v-outline" | "tumble-dryer" | "tumblr" | "tumblr-box" | "tumblr-reblog" | "tune" | "tune-vertical" | "turnstile" | "turnstile-outline" | "turtle" | "twitch"
  type ic35 = "twitter" | "twitter-box" | "twitter-circle" | "twitter-retweet" | "two-factor-authentication" | "uber" | "ubisoft" | "ubuntu" | "ultra-high-definition" | "umbraco" | "umbrella" | "umbrella-closed" | "umbrella-outline" | "undo" | "undo-variant" | "unfold-less-horizontal" | "unfold-less-vertical" | "unfold-more-horizontal" | "unfold-more-vertical" | "ungroup" | "unity" | "unreal" | "untappd" | "update" | "upload" | "upload-multiple" | "upload-network" | "upload-network-outline" | "upload-outline" | "usb" | "van-passenger" | "van-utility" | "vanish" | "variable" | "vector-arrange-above" | "vector-arrange-below" | "vector-bezier" | "vector-circle" | "vector-circle-variant" | "vector-combine" | "vector-curve" | "vector-difference" | "vector-difference-ab" | "vector-difference-ba" | "vector-ellipse" | "vector-intersection" | "vector-line" | "vector-point" | "vector-polygon" | "vector-polyline" | "vector-radius" | "vector-rectangle" | "vector-selection" | "vector-square" | "vector-triangle" | "vector-union" | "venmo" | "vhs" | "vibrate" | "vibrate-off" | "video" | "video-3d" | "video-4k-box" | "video-account" | "video-image" | "video-input-antenna" | "video-input-component" | "video-input-hdmi" | "video-input-svideo" | "video-minus" | "video-off" | "video-off-outline" | "video-outline" | "video-plus" | "video-stabilization" | "video-switch" | "video-vintage" | "view-agenda" | "view-array" | "view-carousel" | "view-column" | "view-dashboard" | "view-dashboard-outline" | "view-dashboard-variant" | "view-day" | "view-grid" | "view-headline" | "view-list" | "view-module" | "view-parallel" | "view-quilt" | "view-sequential" | "view-split-horizontal" | "view-split-vertical" | "view-stream" | "view-week" | "vimeo" | "violin" | "virtual-reality" | "visual-studio"
  type ic36 = "visual-studio-code" | "vk" | "vk-box" | "vk-circle" | "vlc" | "voice" | "voicemail" | "volleyball" | "volume-high" | "volume-low" | "volume-medium" | "volume-minus" | "volume-mute" | "volume-off" | "volume-plus" | "volume-variant-off" | "vote" | "vote-outline" | "vpn" | "vuejs" | "walk" | "wall" | "wall-sconce" | "wall-sconce-flat" | "wall-sconce-variant" | "wallet" | "wallet-giftcard" | "wallet-membership" | "wallet-outline" | "wallet-travel" | "wallpaper" | "wan" | "washing-machine" | "watch" | "watch-export" | "watch-export-variant" | "watch-import" | "watch-import-variant" | "watch-variant" | "watch-vibrate" | "watch-vibrate-off" | "water" | "water-off" | "water-outline" | "water-percent" | "water-pump" | "watermark" | "waves" | "waze" | "weather-cloudy" | "weather-fog" | "weather-hail" | "weather-hurricane" | "weather-lightning" | "weather-lightning-rainy" | "weather-night" | "weather-partlycloudy" | "weather-pouring" | "weather-rainy" | "weather-snowy" | "weather-snowy-rainy" | "weather-sunny" | "weather-sunset" | "weather-sunset-down" | "weather-sunset-up" | "weather-windy" | "weather-windy-variant" | "web" | "webcam" | "webhook" | "webpack" | "wechat" | "weight" | "weight-gram" | "weight-kilogram" | "weight-pound" | "whatsapp" | "wheelchair-accessibility" | "whistle" | "white-balance-auto" | "white-balance-incandescent" | "white-balance-iridescent" | "white-balance-sunny" | "widgets" | "wifi" | "wifi-off" | "wifi-star" | "wifi-strength-1" | "wifi-strength-1-alert" | "wifi-strength-1-lock" | "wifi-strength-2" | "wifi-strength-2-alert" | "wifi-strength-2-lock" | "wifi-strength-3" | "wifi-strength-3-alert" | "wifi-strength-3-lock" | "wifi-strength-4" | "wifi-strength-4-alert" | "wifi-strength-4-lock" | "wifi-strength-alert-outline" | "wifi-strength-lock-outline"
  type ic37 = "wifi-strength-off" | "wifi-strength-off-outline" | "wifi-strength-outline" | "wii" | "wiiu" | "wikipedia" | "wind-turbine" | "window-close" | "window-closed" | "window-maximize" | "window-minimize" | "window-open" | "window-restore" | "windows" | "windows-classic" | "wiper" | "wiper-wash" | "wordpress" | "worker" | "wrap" | "wrap-disabled" | "wrench" | "wrench-outline" | "wunderlist" | "xamarin" | "xamarin-outline" | "xaml" | "xbox" | "xbox-controller" | "xbox-controller-battery-alert" | "xbox-controller-battery-charging" | "xbox-controller-battery-empty" | "xbox-controller-battery-full" | "xbox-controller-battery-low" | "xbox-controller-battery-medium" | "xbox-controller-battery-unknown" | "xbox-controller-off" | "xda" | "xing" | "xing-box" | "xing-circle" | "xml" | "xmpp" | "yahoo" | "yammer" | "yeast" | "yelp" | "yin-yang" | "youtube" | "youtube-creator-studio" | "youtube-gaming" | "youtube-subscription" | "youtube-tv" | "z-wave" | "zend" | "zigbee" | "zip-box" | "zip-disk" | "zodiac-aquarius" | "zodiac-aries" | "zodiac-cancer" | "zodiac-capricorn" | "zodiac-gemini" | "zodiac-leo" | "zodiac-libra" | "zodiac-pisces" | "zodiac-sagittarius" | "zodiac-scorpio" | "zodiac-taurus" | "zodiac-virgo"
  type LibIconStyle = ic1 | ic2 | ic3 | ic4 | ic5 | ic6 | ic7 | ic8 | ic9 | ic10 | ic11 | ic12 | ic13 | ic14 | ic15 | ic16 | ic17 | ic18 | ic19 | ic20 | ic21 | ic22 | ic23 | ic24 | ic25 | ic26 | ic27 | ic28 | ic29 | ic30 | ic31 | ic32 | ic33 | ic34 | ic35 | ic36 | ic37
  type ic38 = "ios-add" | "ios-add-circle" | "ios-add-circle-outline" | "ios-airplane" | "ios-alarm" | "ios-albums" | "ios-alert" | "ios-american-football" | "ios-analytics" | "ios-aperture" | "ios-apps" | "ios-appstore" | "ios-archive" | "ios-arrow-back" | "ios-arrow-down" | "ios-arrow-dropdown" | "ios-arrow-dropdown-circle" | "ios-arrow-dropleft" | "ios-arrow-dropleft-circle" | "ios-arrow-dropright" | "ios-arrow-dropright-circle" | "ios-arrow-dropup" | "ios-arrow-dropup-circle" | "ios-arrow-forward" | "ios-arrow-round-back" | "ios-arrow-round-down" | "ios-arrow-round-forward" | "ios-arrow-round-up" | "ios-arrow-up" | "ios-at" | "ios-attach" | "ios-backspace" | "ios-barcode" | "ios-baseball" | "ios-basket" | "ios-basketball" | "ios-battery-charging" | "ios-battery-dead" | "ios-battery-full" | "ios-beaker" | "ios-bed" | "ios-beer" | "ios-bicycle" | "ios-bluetooth" | "ios-boat" | "ios-body" | "ios-bonfire" | "ios-book" | "ios-bookmark" | "ios-bookmarks" | "ios-bowtie" | "ios-briefcase" | "ios-browsers" | "ios-brush" | "ios-bug" | "ios-build" | "ios-bulb" | "ios-bus" | "ios-business" | "ios-cafe" | "ios-calculator" | "ios-calendar" | "ios-call" | "ios-camera" | "ios-car" | "ios-card" | "ios-cart" | "ios-cash" | "ios-cellular" | "ios-chatboxes" | "ios-chatbubbles" | "ios-checkbox" | "ios-checkbox-outline" | "ios-checkmark" | "ios-checkmark-circle" | "ios-checkmark-circle-outline" | "ios-clipboard" | "ios-clock" | "ios-close" | "ios-close-circle" | "ios-close-circle-outline" | "ios-cloud" | "ios-cloud-circle" | "ios-cloud-done" | "ios-cloud-download" | "ios-cloud-outline" | "ios-cloud-upload" | "ios-cloudy" | "ios-cloudy-night" | "ios-code" | "ios-code-download" | "ios-code-working" | "ios-cog" | "ios-color-fill" | "ios-color-filter" | "ios-color-palette" | "ios-color-wand"
  type ic39 = "ios-compass" | "ios-construct" | "ios-contact" | "ios-contacts" | "ios-contract" | "ios-contrast" | "ios-copy" | "ios-create" | "ios-crop" | "ios-cube" | "ios-cut" | "ios-desktop" | "ios-disc" | "ios-document" | "ios-done-all" | "ios-download" | "ios-easel" | "ios-egg" | "ios-exit" | "ios-expand" | "ios-eye" | "ios-eye-off" | "ios-fastforward" | "ios-female" | "ios-filing" | "ios-film" | "ios-finger-print" | "ios-fitness" | "ios-flag" | "ios-flame" | "ios-flash" | "ios-flash-off" | "ios-flashlight" | "ios-flask" | "ios-flower" | "ios-folder" | "ios-folder-open" | "ios-football" | "ios-funnel" | "ios-gift" | "ios-git-branch" | "ios-git-commit" | "ios-git-compare" | "ios-git-merge" | "ios-git-network" | "ios-git-pull-request" | "ios-glasses" | "ios-globe" | "ios-grid" | "ios-hammer" | "ios-hand" | "ios-happy" | "ios-headset" | "ios-heart" | "ios-heart-dislike" | "ios-heart-empty" | "ios-heart-half" | "ios-help" | "ios-help-buoy" | "ios-help-circle" | "ios-help-circle-outline" | "ios-home" | "ios-hourglass" | "ios-ice-cream" | "ios-image" | "ios-images" | "ios-infinite" | "ios-information" | "ios-information-circle" | "ios-information-circle-outline" | "ios-jet" | "ios-journal" | "ios-key" | "ios-keypad" | "ios-laptop" | "ios-leaf" | "ios-link" | "ios-list" | "ios-list-box" | "ios-locate" | "ios-lock" | "ios-log-in" | "ios-log-out" | "ios-magnet" | "ios-mail" | "ios-mail-open" | "ios-mail-unread" | "ios-male" | "ios-man" | "ios-map" | "ios-medal" | "ios-medical" | "ios-medkit" | "ios-megaphone" | "ios-menu" | "ios-mic" | "ios-mic-off" | "ios-microphone" | "ios-moon" | "ios-more" | "ios-move" | "ios-musical-note" | "ios-musical-notes" | "ios-navigate" | "ios-notifications" | "ios-notifications-off" | "ios-notifications-outline" | "ios-nuclear"
  type ic40 = "ios-nutrition" | "ios-open" | "ios-options" | "ios-outlet" | "ios-paper" | "ios-paper-plane" | "ios-partly-sunny" | "ios-pause" | "ios-paw" | "ios-people" | "ios-person" | "ios-person-add" | "ios-phone-landscape" | "ios-phone-portrait" | "ios-photos" | "ios-pie" | "ios-pin" | "ios-pint" | "ios-pizza" | "ios-planet" | "ios-play" | "ios-play-circle" | "ios-podium" | "ios-power" | "ios-pricetag" | "ios-pricetags" | "ios-print" | "ios-pulse" | "ios-qr-scanner" | "ios-quote" | "ios-radio" | "ios-radio-button-off" | "ios-radio-button-on" | "ios-rainy" | "ios-recording" | "ios-redo" | "ios-refresh" | "ios-refresh-circle" | "ios-remove" | "ios-remove-circle" | "ios-remove-circle-outline" | "ios-reorder" | "ios-repeat" | "ios-resize" | "ios-restaurant" | "ios-return-left" | "ios-return-right" | "ios-reverse-camera" | "ios-rewind" | "ios-ribbon" | "ios-rocket" | "ios-rose" | "ios-sad" | "ios-save" | "ios-school" | "ios-search" | "ios-send" | "ios-settings" | "ios-share" | "ios-share-alt" | "ios-shirt" | "ios-shuffle" | "ios-skip-backward" | "ios-skip-forward" | "ios-snow" | "ios-speedometer" | "ios-square" | "ios-square-outline" | "ios-star" | "ios-star-half" | "ios-star-outline" | "ios-stats" | "ios-stopwatch" | "ios-subway" | "ios-sunny" | "ios-swap" | "ios-switch" | "ios-sync" | "ios-tablet-landscape" | "ios-tablet-portrait" | "ios-tennisball" | "ios-text" | "ios-thermometer" | "ios-thumbs-down" | "ios-thumbs-up" | "ios-thunderstorm" | "ios-time" | "ios-timer" | "ios-today" | "ios-train" | "ios-transgender" | "ios-trash" | "ios-trending-down" | "ios-trending-up" | "ios-trophy" | "ios-tv" | "ios-umbrella" | "ios-undo" | "ios-unlock" | "ios-videocam" | "ios-volume-high" | "ios-volume-low" | "ios-volume-mute" | "ios-volume-off" | "ios-walk" | "ios-wallet"
  type ic41 = "ios-warning" | "ios-watch" | "ios-water" | "ios-wifi" | "ios-wine" | "ios-woman" | "logo-android" | "logo-angular" | "logo-apple" | "logo-bitbucket" | "logo-bitcoin" | "logo-buffer" | "logo-chrome" | "logo-closed-captioning" | "logo-codepen" | "logo-css3" | "logo-designernews" | "logo-dribbble" | "logo-dropbox" | "logo-euro" | "logo-facebook" | "logo-flickr" | "logo-foursquare" | "logo-freebsd-devil" | "logo-game-controller-a" | "logo-game-controller-b" | "logo-github" | "logo-google" | "logo-googleplus" | "logo-hackernews" | "logo-html5" | "logo-instagram" | "logo-ionic" | "logo-ionitron" | "logo-javascript" | "logo-linkedin" | "logo-markdown" | "logo-model-s" | "logo-no-smoking" | "logo-nodejs" | "logo-npm" | "logo-octocat" | "logo-pinterest" | "logo-playstation" | "logo-polymer" | "logo-python" | "logo-reddit" | "logo-rss" | "logo-sass" | "logo-skype" | "logo-slack" | "logo-snapchat" | "logo-steam" | "logo-tumblr" | "logo-tux" | "logo-twitch" | "logo-twitter" | "logo-usd" | "logo-vimeo" | "logo-vk" | "logo-whatsapp" | "logo-windows" | "logo-wordpress" | "logo-xbox" | "logo-xing" | "logo-yahoo" | "logo-yen" | "logo-youtube" | "md-add" | "md-add-circle" | "md-add-circle-outline" | "md-airplane" | "md-alarm" | "md-albums" | "md-alert" | "md-american-football" | "md-analytics" | "md-aperture" | "md-apps" | "md-appstore" | "md-archive" | "md-arrow-back" | "md-arrow-down" | "md-arrow-dropdown" | "md-arrow-dropdown-circle" | "md-arrow-dropleft" | "md-arrow-dropleft-circle" | "md-arrow-dropright" | "md-arrow-dropright-circle" | "md-arrow-dropup" | "md-arrow-dropup-circle" | "md-arrow-forward" | "md-arrow-round-back" | "md-arrow-round-down" | "md-arrow-round-forward" | "md-arrow-round-up" | "md-arrow-up" | "md-at" | "md-attach" | "md-backspace" | "md-barcode"
  type ic42 = "md-baseball" | "md-basket" | "md-basketball" | "md-battery-charging" | "md-battery-dead" | "md-battery-full" | "md-beaker" | "md-bed" | "md-beer" | "md-bicycle" | "md-bluetooth" | "md-boat" | "md-body" | "md-bonfire" | "md-book" | "md-bookmark" | "md-bookmarks" | "md-bowtie" | "md-briefcase" | "md-browsers" | "md-brush" | "md-bug" | "md-build" | "md-bulb" | "md-bus" | "md-business" | "md-cafe" | "md-calculator" | "md-calendar" | "md-call" | "md-camera" | "md-car" | "md-card" | "md-cart" | "md-cash" | "md-cellular" | "md-chatboxes" | "md-chatbubbles" | "md-checkbox" | "md-checkbox-outline" | "md-checkmark" | "md-checkmark-circle" | "md-checkmark-circle-outline" | "md-clipboard" | "md-clock" | "md-close" | "md-close-circle" | "md-close-circle-outline" | "md-cloud" | "md-cloud-circle" | "md-cloud-done" | "md-cloud-download" | "md-cloud-outline" | "md-cloud-upload" | "md-cloudy" | "md-cloudy-night" | "md-code" | "md-code-download" | "md-code-working" | "md-cog" | "md-color-fill" | "md-color-filter" | "md-color-palette" | "md-color-wand" | "md-compass" | "md-construct" | "md-contact" | "md-contacts" | "md-contract" | "md-contrast" | "md-copy" | "md-create" | "md-crop" | "md-cube" | "md-cut" | "md-desktop" | "md-disc" | "md-document" | "md-done-all" | "md-download" | "md-easel" | "md-egg" | "md-exit" | "md-expand" | "md-eye" | "md-eye-off" | "md-fastforward" | "md-female" | "md-filing" | "md-film" | "md-finger-print" | "md-fitness" | "md-flag" | "md-flame" | "md-flash" | "md-flash-off" | "md-flashlight" | "md-flask" | "md-flower" | "md-folder" | "md-folder-open" | "md-football" | "md-funnel" | "md-gift" | "md-git-branch" | "md-git-commit" | "md-git-compare" | "md-git-merge" | "md-git-network" | "md-git-pull-request" | "md-glasses" | "md-globe" | "md-grid"
  type ic43 = "md-hammer" | "md-hand" | "md-happy" | "md-headset" | "md-heart" | "md-heart-dislike" | "md-heart-empty" | "md-heart-half" | "md-help" | "md-help-buoy" | "md-help-circle" | "md-help-circle-outline" | "md-home" | "md-hourglass" | "md-ice-cream" | "md-image" | "md-images" | "md-infinite" | "md-information" | "md-information-circle" | "md-information-circle-outline" | "md-jet" | "md-journal" | "md-key" | "md-keypad" | "md-laptop" | "md-leaf" | "md-link" | "md-list" | "md-list-box" | "md-locate" | "md-lock" | "md-log-in" | "md-log-out" | "md-magnet" | "md-mail" | "md-mail-open" | "md-mail-unread" | "md-male" | "md-man" | "md-map" | "md-medal" | "md-medical" | "md-medkit" | "md-megaphone" | "md-menu" | "md-mic" | "md-mic-off" | "md-microphone" | "md-moon" | "md-more" | "md-move" | "md-musical-note" | "md-musical-notes" | "md-navigate" | "md-notifications" | "md-notifications-off" | "md-notifications-outline" | "md-nuclear" | "md-nutrition" | "md-open" | "md-options" | "md-outlet" | "md-paper" | "md-paper-plane" | "md-partly-sunny" | "md-pause" | "md-paw" | "md-people" | "md-person" | "md-person-add" | "md-phone-landscape" | "md-phone-portrait" | "md-photos" | "md-pie" | "md-pin" | "md-pint" | "md-pizza" | "md-planet" | "md-play" | "md-play-circle" | "md-podium" | "md-power" | "md-pricetag" | "md-pricetags" | "md-print" | "md-pulse" | "md-qr-scanner" | "md-quote" | "md-radio" | "md-radio-button-off" | "md-radio-button-on" | "md-rainy" | "md-recording" | "md-redo" | "md-refresh" | "md-refresh-circle" | "md-remove" | "md-remove-circle" | "md-remove-circle-outline" | "md-reorder" | "md-repeat" | "md-resize" | "md-restaurant" | "md-return-left" | "md-return-right" | "md-reverse-camera" | "md-rewind" | "md-ribbon" | "md-rocket" | "md-rose" | "md-sad" | "md-save"
  type ic44 = "md-school" | "md-search" | "md-send" | "md-settings" | "md-share" | "md-share-alt" | "md-shirt" | "md-shuffle" | "md-skip-backward" | "md-skip-forward" | "md-snow" | "md-speedometer" | "md-square" | "md-square-outline" | "md-star" | "md-star-half" | "md-star-outline" | "md-stats" | "md-stopwatch" | "md-subway" | "md-sunny" | "md-swap" | "md-switch" | "md-sync" | "md-tablet-landscape" | "md-tablet-portrait" | "md-tennisball" | "md-text" | "md-thermometer" | "md-thumbs-down" | "md-thumbs-up" | "md-thunderstorm" | "md-time" | "md-timer" | "md-today" | "md-train" | "md-transgender" | "md-trash" | "md-trending-down" | "md-trending-up" | "md-trophy" | "md-tv" | "md-umbrella" | "md-undo" | "md-unlock" | "md-videocam" | "md-volume-high" | "md-volume-low" | "md-volume-mute" | "md-volume-off" | "md-walk" | "md-wallet" | "md-warning" | "md-watch" | "md-water" | "md-wifi" | "md-wine" | "md-woman"
  type LibIonIconStyle = ic38 | ic39 | ic40 | ic41 | ic42 | ic43 | ic44
  type LibAntDesignIconStyle = "stepforward" | "stepbackward" | "forward" | "banckward" | "caretright" | "caretleft" | "caretdown" | "caretup" | "rightcircle" | "leftcircle" | "upcircle" | "downcircle" | "rightcircleo" | "leftcircleo" | "upcircleo" | "downcircleo" | "verticleleft" | "verticleright" | "back" | "retweet" | "shrink" | "arrowsalt" | "doubleright" | "doubleleft" | "arrowdown" | "arrowup" | "arrowright" | "arrowleft" | "down" | "up" | "right" | "left" | "minussquareo" | "minuscircle" | "minuscircleo" | "minus" | "pluscircleo" | "pluscircle" | "plus" | "infocirlce" | "infocirlceo" | "info" | "exclamation" | "exclamationcircle" | "exclamationcircleo" | "closecircle" | "closecircleo" | "checkcircle" | "checkcircleo" | "check" | "close" | "customerservice" | "creditcard" | "codesquareo" | "book" | "barschart" | "bars" | "question" | "questioncircle" | "questioncircleo" | "pause" | "pausecircle" | "pausecircleo" | "clockcircle" | "clockcircleo" | "swap" | "swapleft" | "swapright" | "plussquareo" | "frown" | "menufold" | "mail" | "link" | "areachart" | "linechart" | "home" | "laptop" | "star" | "staro" | "filter" | "meho" | "meh" | "shoppingcart" | "save" | "user" | "videocamera" | "totop" | "team" | "sharealt" | "setting" | "picture" | "phone" | "paperclip" | "notification" | "menuunfold" | "inbox" | "lock" | "qrcode" | "tags" | "tagso" | "cloudo" | "cloud" | "cloudupload" | "clouddownload" | "clouddownloado" | "clouduploado" | "enviroment" | "enviromento" | "eye" | "eyeo" | "camera" | "camerao" | "windows" | "export2" | "export" | "circledowno" | "circledown" | "hdd" | "ie" | "delete" | "enter" | "pushpino" | "pushpin" | "heart" | "hearto" | "smile-circle" | "smileo" | "frowno" | "calculator" | "chrome" | "github" | "iconfontdesktop" | "caretcircleoup" | "upload" | "download" | "piechart" | "lock1" | "unlock" | "windowso" | "dotchart" | "barchart" | "codesquare" | "plussquare" | "minussquare" | "closesquare" | "closesquareo" | "checksquare" | "checksquareo" | "fastbackward" | "fastforward" | "upsquare" | "downsquare" | "leftsquare" | "rightsquare" | "rightsquareo" | "leftsquareo" | "down-square-o" | "up-square-o" | "play" | "playcircleo" | "tag" | "tago" | "addfile" | "folder1" | "file1" | "switcher" | "addfolder" | "folderopen" | "search1" | "ellipsis1" | "calendar" | "filetext1" | "copy1" | "jpgfile1" | "pdffile1" | "exclefile1" | "pptfile1" | "unknowfile1" | "wordfile1" | "dingding" | "dingding-o" | "mobile1" | "tablet1" | "bells" | "disconnect" | "database" | "barcode" | "hourglass" | "key" | "flag" | "layout" | "printer" | "USB" | "skin" | "tool" | "car" | "addusergroup" | "carryout" | "deleteuser" | "deleteusergroup" | "man" | "isv" | "gift" | "idcard" | "medicinebox" | "redenvelopes" | "rest" | "Safety" | "wallet" | "woman" | "adduser" | "bank" | "Trophy" | "loading1" | "loading2" | "like2" | "dislike2" | "like1" | "dislike1" | "bulb1" | "rocket1" | "select1" | "apple1" | "apple-o" | "android1" | "android" | "aliwangwang-o1" | "aliwangwang" | "pay-circle1" | "pay-circle-o1" | "poweroff" | "trademark" | "find" | "copyright" | "sound" | "earth" | "wifi" | "sync" | "login" | "logout" | "reload1" | "message1" | "shake" | "API" | "appstore-o" | "appstore1" | "scan1" | "exception1" | "contacts" | "solution1" | "fork" | "edit" | "form" | "warning" | "table" | "profile" | "dashboard" | "indent-left" | "indent-right" | "menu-unfold" | "menu-fold" | "antdesign" | "alipay-square" | "codepen-circle" | "google" | "amazon" | "codepen" | "facebook-square" | "dropbox" | "googleplus" | "linkedin-square" | "medium-monogram" | "gitlab" | "medium-wordmark" | "QQ" | "skype" | "taobao-square" | "alipay-circle" | "youtube" | "wechat" | "twitter" | "weibo" | "HTML" | "taobao-circle" | "weibo-circle" | "weibo-square" | "CodeSandbox" | "aliyun" | "zhihu" | "behance" | "dribbble" | "dribbble-square" | "behance-square" | "file-markdown" | "instagram" | "yuque" | "slack" | "slack-squar"
  type LibSimpleLineIconStyle = "user" | "people" | "user-female" | "user-follow" | "user-following" | "user-unfollow" | "login" | "logout" | "emotsmile" | "phone" | "call-end" | "call-in" | "call-out" | "map" | "location-pin" | "direction" | "directions" | "compass" | "layers" | "menu" | "list" | "options-vertical" | "options" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "arrow-up-circle" | "arrow-left-circle" | "arrow-right-circle" | "arrow-down-circle" | "check" | "clock" | "plus" | "minus" | "close" | "event" | "exclamation" | "organization" | "trophy" | "screen-smartphone" | "screen-desktop" | "plane" | "notebook" | "mustache" | "mouse" | "magnet" | "energy" | "disc" | "cursor" | "cursor-move" | "crop" | "chemistry" | "speedometer" | "shield" | "screen-tablet" | "magic-wand" | "hourglass" | "graduation" | "ghost" | "game-controller" | "fire" | "eyeglass" | "envelope-open" | "envelope-letter" | "bell" | "badge" | "anchor" | "wallet" | "vector" | "speech" | "puzzle" | "printer" | "present" | "playlist" | "pin" | "picture" | "handbag" | "globe-alt" | "globe" | "folder-alt" | "folder" | "film" | "feed" | "drop" | "drawer" | "docs" | "doc" | "diamond" | "cup" | "calculator" | "bubbles" | "briefcase" | "book-open" | "basket-loaded" | "basket" | "bag" | "action-undo" | "action-redo" | "wrench" | "umbrella" | "trash" | "tag" | "support" | "frame" | "size-fullscreen" | "size-actual" | "shuffle" | "share-alt" | "share" | "rocket" | "question" | "pie-chart" | "pencil" | "note" | "loop" | "home" | "grid" | "graph" | "microphone" | "music-tone-alt" | "music-tone" | "earphones-alt" | "earphones" | "equalizer" | "like" | "dislike" | "control-start" | "control-rewind" | "control-play" | "control-pause" | "control-forward" | "control-end" | "volume-1" | "volume-2" | "volume-off" | "calendar" | "bulb" | "chart" | "ban" | "bubble" | "camrecorder" | "camera" | "cloud-download" | "cloud-upload" | "envelope" | "eye" | "flag" | "heart" | "info" | "key" | "link" | "lock" | "lock-open" | "magnifier" | "magnifier-add" | "magnifier-remove" | "paper-clip" | "paper-plane" | "power" | "refresh" | "reload" | "settings" | "star" | "symbol-female" | "symbol-male" | "target" | "credit-card" | "paypal" | "social-tumblr" | "social-twitter" | "social-facebook" | "social-instagram" | "social-linkedin" | "social-pinterest" | "social-github" | "social-google" | "social-reddit" | "social-skype" | "social-dribbble" | "social-behance" | "social-foursqare" | "social-soundcloud" | "social-spotify" | "social-stumbleupon" | "social-youtube" | "social-dropbox" | "social-vkontakte" | "social-steam"
  type LibEntypoIconStyle = "500px" | "500px-with-circle" | "add-to-list" | "add-user" | "address" | "adjust" | "air" | "aircraft" | "aircraft-landing" | "aircraft-take-off" | "align-bottom" | "align-horizontal-middle" | "align-left" | "align-right" | "align-top" | "align-vertical-middle" | "app-store" | "archive" | "area-graph" | "arrow-bold-down" | "arrow-bold-left" | "arrow-bold-right" | "arrow-bold-up" | "arrow-down" | "arrow-left" | "arrow-long-down" | "arrow-long-left" | "arrow-long-right" | "arrow-long-up" | "arrow-right" | "arrow-up" | "arrow-with-circle-down" | "arrow-with-circle-left" | "arrow-with-circle-right" | "arrow-with-circle-up" | "attachment" | "awareness-ribbon" | "back" | "back-in-time" | "baidu" | "bar-graph" | "basecamp" | "battery" | "beamed-note" | "behance" | "bell" | "blackboard" | "block" | "book" | "bookmark" | "bookmarks" | "bowl" | "box" | "briefcase" | "browser" | "brush" | "bucket" | "bug" | "cake" | "calculator" | "calendar" | "camera" | "ccw" | "chat" | "check" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-small-down" | "chevron-small-left" | "chevron-small-right" | "chevron-small-up" | "chevron-thin-down" | "chevron-thin-left" | "chevron-thin-right" | "chevron-thin-up" | "chevron-up" | "chevron-with-circle-down" | "chevron-with-circle-left" | "chevron-with-circle-right" | "chevron-with-circle-up" | "circle" | "circle-with-cross" | "circle-with-minus" | "circle-with-plus" | "circular-graph" | "clapperboard" | "classic-computer" | "clipboard" | "clock" | "cloud" | "code" | "cog" | "colours" | "compass" | "controller-fast-backward" | "controller-fast-forward" | "controller-jump-to-start" | "controller-next" | "controller-paus" | "controller-play" | "controller-record" | "controller-stop" | "controller-volume" | "copy" | "creative-cloud" | "creative-commons" | "creative-commons-attribution" | "creative-commons-noderivs" | "creative-commons-noncommercial-eu" | "creative-commons-noncommercial-us" | "creative-commons-public-domain" | "creative-commons-remix" | "creative-commons-share" | "creative-commons-sharealike" | "credit" | "credit-card" | "crop" | "cross" | "cup" | "cw" | "cycle" | "database" | "dial-pad" | "direction" | "document" | "document-landscape" | "documents" | "dot-single" | "dots-three-horizontal" | "dots-three-vertical" | "dots-two-horizontal" | "dots-two-vertical" | "download" | "dribbble" | "dribbble-with-circle" | "drink" | "drive" | "drop" | "dropbox" | "edit" | "email" | "emoji-flirt" | "emoji-happy" | "emoji-neutral" | "emoji-sad" | "erase" | "eraser" | "evernote" | "export" | "eye" | "eye-with-line" | "facebook" | "facebook-with-circle" | "feather" | "fingerprint" | "flag" | "flash" | "flashlight" | "flat-brush" | "flattr" | "flickr" | "flickr-with-circle" | "flow-branch" | "flow-cascade" | "flow-line" | "flow-parallel" | "flow-tree" | "flower" | "folder" | "folder-images" | "folder-music" | "folder-video" | "forward" | "foursquare" | "funnel" | "game-controller" | "gauge" | "github" | "github-with-circle" | "globe" | "google-" | "google--with-circle" | "google-drive" | "google-hangouts" | "google-play" | "graduation-cap" | "grid" | "grooveshark" | "hair-cross" | "hand" | "heart" | "heart-outlined" | "help" | "help-with-circle" | "home" | "hour-glass" | "houzz" | "icloud" | "image" | "image-inverted" | "images" | "inbox" | "infinity" | "info" | "info-with-circle" | "instagram" | "instagram-with-circle" | "install" | "key" | "keyboard" | "lab-flask" | "landline" | "language" | "laptop" | "lastfm" | "lastfm-with-circle" | "layers" | "leaf" | "level-down" | "level-up" | "lifebuoy" | "light-bulb" | "light-down" | "light-up" | "line-graph" | "link" | "linkedin" | "linkedin-with-circle" | "list" | "location" | "location-pin" | "lock" | "lock-open" | "log-out" | "login" | "loop" | "magnet" | "magnifying-glass" | "mail" | "mail-with-circle" | "man" | "map" | "mask" | "medal" | "medium" | "medium-with-circle" | "megaphone" | "menu" | "merge" | "message" | "mic" | "minus" | "mixi" | "mobile" | "modern-mic" | "moon" | "mouse" | "mouse-pointer" | "music" | "network" | "new" | "new-message" | "news" | "newsletter" | "note" | "notification" | "notifications-off" | "old-mobile" | "old-phone" | "onedrive" | "open-book" | "palette" | "paper-plane" | "paypal" | "pencil" | "phone" | "picasa" | "pie-chart" | "pin" | "pinterest" | "pinterest-with-circle" | "plus" | "popup" | "power-plug" | "price-ribbon" | "price-tag" | "print" | "progress-empty" | "progress-full" | "progress-one" | "progress-two" | "publish" | "qq" | "qq-with-circle" | "quote" | "radio" | "raft" | "raft-with-circle" | "rainbow" | "rdio" | "rdio-with-circle" | "remove-user" | "renren" | "reply" | "reply-all" | "resize-100-" | "resize-full-screen" | "retweet" | "rocket" | "round-brush" | "rss" | "ruler" | "save" | "scissors" | "scribd" | "select-arrows" | "share" | "share-alternative" | "shareable" | "shield" | "shop" | "shopping-bag" | "shopping-basket" | "shopping-cart" | "shuffle" | "signal" | "sina-weibo" | "skype" | "skype-with-circle" | "slideshare" | "smashing" | "sound" | "sound-mix" | "sound-mute" | "soundcloud" | "sports-club" | "spotify" | "spotify-with-circle" | "spreadsheet" | "squared-cross" | "squared-minus" | "squared-plus" | "star" | "star-outlined" | "stopwatch" | "stumbleupon" | "stumbleupon-with-circle" | "suitcase" | "swap" | "swarm" | "sweden" | "switch" | "tablet" | "tablet-mobile-combo" | "tag" | "text" | "text-document" | "text-document-inverted" | "thermometer" | "thumbs-down" | "thumbs-up" | "thunder-cloud" | "ticket" | "time-slot" | "tools" | "traffic-cone" | "trash" | "tree" | "triangle-down" | "triangle-left" | "triangle-right" | "triangle-up" | "tripadvisor" | "trophy" | "tumblr" | "tumblr-with-circle" | "tv" | "twitter" | "twitter-with-circle" | "typing" | "uninstall" | "unread" | "untag" | "upload" | "upload-to-cloud" | "user" | "users" | "v-card" | "video" | "video-camera" | "vimeo" | "vimeo-with-circle" | "vine" | "vine-with-circle" | "vinyl" | "vk" | "vk-alternitive" | "vk-with-circle" | "voicemail" | "wallet" | "warning" | "water" | "windows-store" | "xing" | "xing-with-circle" | "yelp" | "youko" | "youko-with-circle" | "youtube" | "youtube-with-circle"
  interface LibAntDesignIconProps {
    name: LibAntDesignIconStyle,
    size?: number,
    color?: string,
    style?: any
  }
  interface LibEntypoIconProps {
    name: LibEntypoIconStyle,
    size?: number,
    color?: string,
    style?: any
  }
  interface LibSimpleLineIconProps {
    name: LibSimpleLineIconStyle,
    size?: number,
    color?: string,
    style?: any
  }
  interface LibIonIconProps {
    name: LibIonIconStyle,
    size?: number,
    color?: string,
    style?: any
  }
  interface LibIconProps {
    name: LibIconStyle
    size?: number,
    color?: string,
    style?: any
  }
  interface LibIconState {
  
  }
  class LibIcon extends LibComponent<LibIconProps, LibIconState> {
    constructor(props: LibIconProps);
    static Ionicons(props: LibIonIconProps): any;
    static AntDesign(props: LibAntDesignIconProps): any;
    static SimpleLineIcons(props: LibSimpleLineIconProps): any;
    static EntypoIcons(props: LibEntypoIconProps): any;
    render(): any;
  }
  interface LibImageCrop {
    ratio: string,
    forceCrop: boolean
  }
  interface LibImageProps {
    show?: boolean,
    image?: string,
    editor?: boolean,
  }
  interface LibImageState {
    type: any,
    loading: boolean,
    image: any,
    flashLight: 'on' | 'off'
  }
  interface LibImageGalleryOptions {
    crop?: LibImageCrop
    editor?: boolean,
    multiple?: boolean,
    max?: number
  }
  interface LibImageCameraOptions {
    crop?: LibImageCrop
    editor?: boolean
  }
  class LibImage extends LibComponent<LibImageProps, LibImageState> {
    static reducer(state: any, action: any): any;
    static mapStateToProps(state: any): any;
    static setResult(image: string): void;
    static show(editor?: boolean): void;
    static hide(): void;
    constructor(props: LibImageProps);
    takePicture(): Promise<void>;
    static showEditor(uri: string, result: (x: any) => void): void;
    static showCropper(uri: string, forceCrop: boolean, ratio: string, result: (x: any) => void): void;
    static fromCamera(options?: LibImageCameraOptions): Promise<string>;
    static fromGallery(options?: LibImageGalleryOptions): Promise<string | string[]>;
    static processImage(result: any): Promise<string>;
    render(): any;
  }
  interface LibImage_cropProps {
  
  }
  function LibImage_crop(props: LibImage_cropProps): any;
  namespace LibImage_cropProperty {}
  interface LibImage_editProps {
  
  }
  function LibImage_edit(props: LibImage_editProps): any;
  namespace LibImage_editProperty {}
  interface LibImage_multiProps {
    mediaSubtype: string
  }
  function LibImage_multi(props: LibImage_multiProps): any;
  namespace LibImage_multiProperty {}
  interface LibInfiniteProps {
    url: string,
    post?: any,
    isDebug?: 0 | 1,
    initialData?: any[],
    injectData?: any,
    onDataChange?: (data: any, page: number) => void
    onResult?: (res: any, uri: string) => void,
    error?: string,
    errorView?: ((msg: string) => any) | any,
    mainIndex?: string,
    stickyHeaderIndices?: number[],
    bounces?: boolean,
    staticHeight?: number,
    ItemSeparatorComponent?: any,
    ListEmptyComponent?: any,
    ListFooterComponent?: any,
    ListHeaderComponent?: any,
    columnWrapperStyle?: any,
    onScroll?: (e: any) => void,
    scrollEventThrottle?: number,
    keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled",
    extraData?: any,
    getItemLayout?: (data: any, index: number) => LibListItemLayout,
    horizontal?: boolean,
    initialNumToRender?: number,
    initialScrollIndex?: number,
    keyExtractor?: (item: any, index: number) => string,
    legacyImplementation?: boolean,
    numColumns?: number,
    onEndReached?: (() => void) | null,
    onEndReachedThreshold?: number | null,
    pagingEnabled?: boolean,
    onRefresh?: (() => void) | null,
    refreshing?: boolean | null,
    renderFooter?: () => any,
    renderItem: (item: any, index: number) => any,
    viewabilityConfig?: any,
    removeClippedSubviews?: boolean,
    style?: any
  }
  interface LibInfiniteState {
    data: any[],
    error: string
  }
  class LibInfinite extends LibComponent<LibInfiniteProps, LibInfiniteState> {
    constructor(props: LibInfiniteProps);
    componentDidMount(): void;
    loadData(page?: number): void;
    componentDidUpdate(prevProps: LibInfiniteProps, prevState: LibInfiniteState): void;
    _keyExtractor(item: any, index: number): string;
    scrollToIndex(x: number, anim?: boolean, viewOffset?: number, viewPosition?: number): void;
    render(): any;
  }
  interface LibInputProps {
    icon?: (color: string) => any,
    label: string,
    placeholder?: string,
    mask?: string,
    maskFrom?: 'start' | 'end',
    suffix?: string,
    onPress?: () => void,
    helper?: string
    allowFontScaling?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters",
    autoCorrect?: boolean,
    autoFocus?: boolean,
    blurOnSubmit?: boolean,
    caretHidden?: boolean,
    contextMenuHidden?: boolean,
    defaultValue?: string,
    editable?: boolean,
    inactive?: boolean,
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad",
    maxLength?: number,
    multiline?: boolean,
    onSubmitEditing?: () => void,
    onChangeText?: (text: string) => void,
    placeholderTextColor?: string,
    returnKeyType?: "done" | "go" | "next" | "search" | "send",
    secureTextEntry?: boolean,
    selectTextOnFocus?: boolean,
    selectionColor?: string,
    style?: any,
    value?: string,
  }
  interface LibInputState {
    hasFocus: boolean,
    error?: string,
    helper?: string
  }
  class LibInput extends LibComponent<LibInputProps, LibInputState> {
    constructor(props: LibInputProps);
    getText(): string;
    getTextMasked(): string;
    focus(): void;
    blur(): void;
    setHelper(msg: string): void;
    clearHelper(msg: string): void;
    setError(msg: string): void;
    clearError(): void;
    mask(text: string): string;
    unmask(text: string): string;
    setText(text: string): void;
    componentDidUpdate(prevProps: LibInputProps, prevState: LibInputState): void;
    componentDidMount(): void;
    render(): any;
  }
  interface LibInput_baseProps {
    name: string,
    children?: any,
    onChangeText: (text: string, textMasked: string) => void,
    placeholder?: string,
    mask?: string,
    maskFrom?: 'start' | 'end',
    allowFontScaling?: boolean,
    autoCapitalize?: "none" | "sentences" | "words" | "characters",
    autoCorrect?: boolean,
    autoFocus?: boolean,
    blurOnSubmit?: boolean,
    caretHidden?: boolean,
    contextMenuHidden?: boolean,
    defaultValue?: string,
    editable?: boolean,
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad",
    maxLength?: number,
    multiline?: boolean,
    onSubmitEditing?: () => void,
    placeholderTextColor?: string,
    returnKeyType?: "done" | "go" | "next" | "search" | "send",
    secureTextEntry?: boolean,
    selectTextOnFocus?: boolean,
    selectionColor?: string,
    style?: any,
    value?: string,
  }
  function LibInput_base(props: LibInput_baseProps): any;
  namespace LibInput_baseProperty {
    function focus(name: string): void;
    function blur(name: string): void;
    function setText(name: string): (text: string) => void;
  }
  function LibInput_base_data(): void;
  namespace LibInput_base_dataProperty {
    var inputBaseRef: any;
    var inputBaseData: any;}
  interface LibKeyboard_avoidProps {
    children?: any,
    style?: any
  }
  function LibKeyboard_avoid(props: LibKeyboard_avoidProps): any;
  namespace LibKeyboard_avoidProperty {}
  interface LibLazyProps {
    children?: any
  }
  function LibLazy(props: LibLazyProps): any;
  namespace LibLazyProperty {}
  interface LibListItemLayout {
    length: number,
    offset: number,
    index: number
  }
  interface LibListProps {
    bounces?: boolean,
    staticHeight?: number,
    ItemSeparatorComponent?: any,
    ListEmptyComponent?: any,
    ListFooterComponent?: any,
    ListHeaderComponent?: any,
    columnWrapperStyle?: any,
    keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled",
    data: any[],
    pagingEnabled?: boolean,
    extraData?: any,
    getItemLayout?: (data: any, index: number) => LibListItemLayout,
    horizontal?: boolean,
    initialNumToRender?: number,
    initialScrollIndex?: number,
    keyExtractor?: (item: any, index: number) => string,
    legacyImplementation?: boolean,
    numColumns?: number,
    onScroll?: (e: any) => void,
    scrollEventThrottle?: number,
    onEndReached?: (() => void) | null,
    onEndReachedThreshold?: number | null,
    onRefresh?: (() => void) | null,
    refreshing?: boolean | null,
    renderFooter?: () => any,
    renderItem: (item: any, index: number) => any,
    viewabilityConfig?: any,
    style?: any,
    removeClippedSubviews?: boolean,
  }
  interface LibListState {
  }
  class LibList extends LibComponent<LibListProps, LibListState> {
    constructor(props: LibListProps);
    scrollToIndex(x: number, anim?: boolean, viewOffset?: number, viewPosition?: number): void;
    keyExtractor(item: any, index: number): string;
    render(): any;
  }
  interface LibLoadingProps {
  
  }
  interface LibLoadingState {
  
  }
  class LibLoading extends LibComponent<LibLoadingProps, LibLoadingState> {
    constructor(props: LibLoadingProps);
    render(): any;
  }
  class LibLocale {
    static reducer(state: any, action: any): any;
    static setLanguage(langId: string): void;
    static getLanguage(): void;
  }
  interface LibMenuProps {
    onItemSelected: (item: any) => void,
    parent?: number,
    style?: any,
    data: any,
    selectedId: number
  }
  interface LibMenuState {
  
  }
  class LibMenu extends LibComponent<LibMenuProps, LibMenuState> {
    constructor(props: LibMenuProps);
    onItemSelected(item: any): void;
    render(): any;
  }
  interface LibMenusubProps {
    data: any,
    id: number,
    selectedId: number,
    title: string,
    onClick: (data: any) => void
  }
  interface LibMenusubState {
    expanded: boolean
  }
  class LibMenusub extends LibComponent<LibMenusubProps, LibMenusubState> {
    constructor(props: LibMenusubProps);
    render(): any;
  }
  interface LibNavigationInjector {
    args: any,
    children?: any
  }
  class LibNavigation {
    static setRef(ref: any): void;
    static setNavigation(nav: any): void;
    static navigation(): any;
    static navigate<S>(route: LibNavigationRoutes, params?: S): void;
    static getResultKey(props: any): number;
    static cancelBackResult(key?: number): void;
    static sendBackResult(result: any, key?: number): void;
    static navigateForResult<S>(route: LibNavigationRoutes, params?: S, key?: number): Promise<any>;
    static replace<S>(routeName: LibNavigationRoutes, params?: S): void;
    static push<S>(routeName: LibNavigationRoutes, params?: S): void;
    static reset(routeName?: LibNavigationRoutes, ...routeNames: LibNavigationRoutes[]): void;
    static back(deep?: number): void;
    static getCurrentRouteName(): string;
    static isFirstRoute(): boolean;
    static backToRoot(): void;
    static Injector(props: LibNavigationInjector): any;
  }
  function LibNavigation_data(): void;
  namespace LibNavigation_dataProperty {
    var libNavigationData: any;
    var libNavigationRef: any;}
  interface LibNet_statusProps {
    isOnline?: boolean
  }
  interface LibNet_statusState {
    animHeight: any
  }
  class LibNet_status extends LibComponent<LibNet_statusProps, LibNet_statusState> {
    static reducer(state: any, action: any): any;
    static setOnline(isOnline: boolean): void;
    static mapStateToProps(state: any): any;
    constructor(props: LibNet_statusProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onChangeConnectivityStatus(isConnected: boolean): void;
    render(): any;
  }
  class LibNotification {
    static listen(dataRef: any): () => void;
    static requestPermission(callback?: (token: any) => void): Promise<any>;
    static openPushNotif(data: any): void;
    static openNotif(data: any): void;
  }
  class LibObject {
    static push(array: any, value?: any, ...values: any[]): (cursor?: string | number, ...cursors: (string | number)[]) => any;
    static unshift(array: any, value?: any, ...values: any[]): (cursor?: string | number, ...cursors: (string | number)[]) => any;
    static splice(array: any, index: number, deleteCount: number, value?: any, ...values: any[]): (cursor?: string | number, ...cursors: (string | number)[]) => any;
    static unset(obj: any, index: number | string, ...indexs: (string | number)[]): (cursor?: string | number, ...cursors: (string | number)[]) => any;
    static set(obj: any, value: any): (cursor?: string | number, ...cursors: (string | number)[]) => any;
    static update(obj: any, callback: (lastValue: any) => any): (cursor?: string | number, ...cursors: (string | number)[]) => any;
    static assign(obj: any, obj1: any): (cursor?: string | number, ...cursors: (string | number)[]) => any;
  }
  interface LibPictureSource {
    uri: string
  }
  interface LibPictureProps {
    source: LibPictureSource | any,
    style: any,
    resizeMode?: "contain" | "cover",
    onError?: () => void,
  }
  function LibPicture(props: LibPictureProps): any;
  namespace LibPictureProperty {
    function createCacheDir(): void;
  }
  interface LibPinProps {
    length: number,
    onChangePin: (pin: string) => void
    boxStyle?: any,
    pinStyle?: any
  }
  function LibPin(props: LibPinProps): any;
  namespace LibPinProperty {}
  interface LibProgressProps {
    show?: boolean,
    message?: string
  }
  interface LibProgressState {
  
  }
  class LibProgress extends LibComponent<LibProgressProps, LibProgressState> {
    static reducer(state: any, action: any): any;
    static show(message?: string): void;
    static hide(): void;
    static mapStateToProps(state: any): any;
    constructor(props: LibProgressProps);
    render(): any;
  }
  interface LibRollProps {
    url: string,
    renderData: (data: any) => any,
    onDataChange?: (data: any) => void,
    post?: any,
    msg?: string,
    defaultHeight?: number,
    bounces?: boolean,
    staticHeight?: number,
    ItemSeparatorComponent?: any,
    ListEmptyComponent?: any,
    ListFooterComponent?: any,
    ListHeaderComponent?: any,
    columnWrapperStyle?: any,
    keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled",
    children?: any[],
    pagingEnabled?: boolean,
    stickyHeaderIndices?: number[],
    extraData?: any,
    onScroll?: (e: any) => void,
    scrollEventThrottle?: number,
    horizontal?: boolean,
    initialNumToRender?: number,
    initialScrollIndex?: number,
    keyExtractor?: (item: any, index: number) => string,
    legacyImplementation?: boolean,
    numColumns?: number,
    onEndReached?: (() => void) | null,
    onEndReachedThreshold?: number | null,
    onRefresh?: (() => void) | null,
    refreshing?: boolean | null,
    viewabilityConfig?: any,
    removeClippedSubviews?: boolean,
    style?: any
  }
  interface LibRollState {
    data: any,
    msg: string
  }
  class LibRoll extends LibComponent<LibRollProps, LibRollState> {
    constructor(props: LibRollProps);
    componentDidMount(): void;
    loadData(): void;
    render(): any;
  }
  interface LibScrollProps {
    defaultHeight?: number,
    bounces?: boolean,
    style?: any,
    staticHeight?: number,
    ItemSeparatorComponent?: any,
    ListEmptyComponent?: any,
    ListFooterComponent?: any,
    ListHeaderComponent?: any,
    columnWrapperStyle?: any,
    onScroll?: (e: any) => void,
    scrollEventThrottle?: number,
    keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled",
    children?: any[],
    extraData?: any,
    stickyHeaderIndices?: number[],
    pagingEnabled?: boolean,
    horizontal?: boolean,
    initialNumToRender?: number,
    initialScrollIndex?: number,
    keyExtractor?: (item: any, index: number) => string,
    legacyImplementation?: boolean,
    numColumns?: number,
    onEndReached?: (() => void) | null,
    onEndReachedThreshold?: number | null,
    onRefresh?: (() => void) | null,
    refreshing?: boolean | null,
    viewabilityConfig?: any,
    removeClippedSubviews?: boolean,
  }
  interface LibScrollState {
    width: number,
    data: any
  }
  class LibScroll extends LibComponent<LibScrollProps, LibScrollState> {
    constructor(props: LibScrollProps);
    keyExtractor(item: any, index: number): string;
    scrollToIndex(x: number, anim?: boolean, viewOffset?: number, viewPosition?: number): void;
    render(): any;
  }
  interface LibSlidingupProps {
  
  }
  interface LibSlidingupState {
    show: boolean,
  }
  class LibSlidingup extends LibComponent<LibSlidingupProps, LibSlidingupState> {
    constructor(props: LibSlidingupProps);
    handleBack(): boolean;
    componentDidUpdate(prevProps: LibSlidingupProps, prevState: LibSlidingupState): void;
    show(): void;
    hide(): void;
    _toggleSubview(isOpen: boolean): Promise<void>;
    render(): any;
  }
  interface LibSocialloginProps {
    url?: string,
    onResult: (userData: any) => void
  }
  interface LibSocialloginState {
  
  }
  class LibSociallogin extends LibComponent<LibSocialloginProps, LibSocialloginState> {
    constructor(props: LibSocialloginProps);
    static setUser(userData: any): void;
    static delUser(): void;
    static getUser(callback?: (userData: any) => void): Promise<any>;
    render(): any;
  }
  interface DbGetAll {
    fields?: string[],
    params?: any[],
    groupBy?: string,
    orderBy?: string,
    limit?: number,
    offset?: number
    callback?: (result: any[]) => void,
    debug?: 0 | 1
  }
  interface DbGetRow {
    fields?: string[],
    id?: string | number,
    params?: any[],
    debug?: 0 | 1,
    callback?: (row: Object) => void
  }
  interface DbDelete {
    fields?: string[],
    id?: string | number,
    params?: any[],
    debug?: 0 | 1,
    callback?: (rowsAffected: number) => void
  }
  interface DbUpdate {
    values: Object,
    debug?: 0 | 1,
    callback?: (rowsAffected: number) => void,
    id?: string | number
  }
  interface DbInsert {
    values: Object,
    debug?: 0 | 1,
    callback?: (insertId: number) => void,
  }
  class LibSqlite {
    constructor();
    init(dbname?: string, createStatement?: string, version?: string, description?: string, size?: any): void;
    create(createStatement: string, debug?: number): Promise<any>;
    drop(dbname: string, debug?: number): Promise<any>;
    getColumn(): any[];
    execute(sqlStatement: string, callback?: (e: any) => void, debug?: number): Promise<any>;
    getSQLFormat(): string;
    verify(values: any, debug?: number): any;
    Insert_(options: DbInsert): Promise<any>;
    Insert(values: Object, callback?: (insertId: number) => void, debug?: number): Promise<any>;
    Update_(options: DbUpdate): Promise<any>;
    Update(id: string | number, values: Object, callback?: (rowsAffected: number) => void, debug?: number): Promise<any>;
    Delete_(options: DbDelete): Promise<any>;
    Delete(id?: string | number, fields?: string[], params?: any[], callback?: (rowsAffected: number) => void, debug?: number): Promise<any>;
    getRow_(options: DbGetRow): Promise<any>;
    getRow(id?: string | number, fields?: string[], params?: any[], callback?: (row: any) => void, debug?: number): Promise<any>;
    getAll_(options?: DbGetAll): Promise<any>;
    getAll(fields?: string[], params?: any[], orderBy?: string, limit?: number, offset?: number, groupBy?: string, callback?: (data: any) => void, debug?: number): Promise<any>;
    configConsole(message?: any, ...optionalParams: any[]): void;
  }
  interface LibStatusbarProps {
    style: "dark" | "light"
    backgroundColor?: string
  }
  function LibStatusbar(props: LibStatusbarProps): any;
  namespace LibStatusbarProperty {}
  class LibStyle {
    static isIphoneX: boolean;
    static STATUSBAR_HEIGHT: number;
    static STATUSBAR_HEIGHT_MASTER: number;
    static colorPrimary: string;
    static colorPrimaryDark: string;
    static colorNavigationBar: string;
    static colorAccent: string;
    static colorGrey: string;
    static colorRed: string;
    static colorTextPrimary: string;
    static colorTextBody: string;
    static colorTextCaption: string;
    static colorLightGrey: string;
    static width: number;
    static height: number;
    static defaultStyle: any;
    static elevation(val: number): any;
  }
  interface LibTextstyleProps {
    textStyle: "header" | "title" | "subtitle" | "subtitle2" | "subheader" | "caption1" | "body" | "section" | "section_action" | "menu",
    style?: any,
    children?: string | "",
    numberOfLines?: number,
    ellipsizeMode?: string,
    text: string | ""
  }
  interface LibTextstyleState {
  
  }
  class LibTextstyle extends LibComponent<LibTextstyleProps, LibTextstyleState> {
    constructor(props: LibTextstyleProps);
    render(): any;
  }
  class LibTheme {
    static reducer(state: any, action: any): any;
    static setTheme(themeName: string, navigation: any, isLogin?: any): void;
    static getTheme(): void;
    static _barStyle(): string;
    static _colorPrimary(): string;
    static _colorAccent(): string;
    static _colorHeader(): string;
    static _colorHeaderText(): string;
    static _colorButtonPrimary(): string;
    static _colorButtonTextPrimary(): string;
    static _colorButtonSecondary(): string;
    static _colorButtonTextSecondary(): string;
    static _colorButtonTertiary(): string;
    static _colorButtonTextTertiary(): string;
    static _colorBackgroundPrimary(): string;
    static _colorBackgroundSecondary(): string;
    static _colorBackgroundTertiary(): string;
    static _colorBackgroundCardPrimary(): string;
    static _colorBackgroundCardSecondary(): string;
    static _colorBackgroundCardTertiary(): string;
    static _colorTextPrimary(): string;
    static _colorTextSecondary(): string;
    static _colorTextTertiary(): string;
    static colors(colors: string[]): string;
  }
  interface LibToastProps {
  
  }
  function LibToast(props: LibToastProps): any;
  namespace LibToastProperty {
    function reducer(state: any, action: any): any;
    function hide(): void;
    function show(message: string, timeout?: number): void;
  }
  interface LibUpdaterProps {
    show: boolean
  }
  function LibUpdater(props: LibUpdaterProps): any;
  namespace LibUpdaterProperty {
    function install(): void;
    function alertInstall(title?: string, msg?: string): void;
    function checkAlertInstall(): void;
    function check(callback: (isNew: boolean) => void): void;
  }
  type LibUtilsTravelMode = 'driving' | 'walking'
  interface LibUtilsDate {
    year: string,
    month: string,
    date: string,
  }
  class LibUtils {
    static checkUndefined(obj: any, cursorsAsString: string): boolean;
    static debounce(func: () => any, delay: number): void;
    static decodeBase64(chipper: string): string;
    static encodeBase64(plain: string): string;
    static qrGenerate(string: string, size?: number): string;
    static uniqueArray(array: any[]): any[];
    static getArgs(props: any, key: string, defOutput?: any): any;
    static getArgsAll<S>(props: any, defOutput?: any): S;
    static getReduxState(key: string, ...keys: string[]): any;
    static objectToUrlParam(obj: any): string;
    static moment(date?: string, locale?: string): any;
    static getUrlParams(url: string): any;
    static getTimezoneByConfig(datetime?: Date | string): string;
    static getKeyBackOf(routeName: string, store?: any): string;
    static getRatingValue(rating: string): number;
    static getRatingCount(rating: string): number;
    static getRating(rating: string, decimalPlaces?: number): string;
    static navGetKey(routeName: string): string;
    static navReset(navigation: any, isLogin?: boolean): void;
    static navResetCustom(navigation: any, routeName: string): void;
    static navReplace(store: any, navigation: any, routeName: string, params?: any): void;
    static money(value: string | number, currency?: string, part?: number): string;
    static numberAbsolute(toNumber: string | number): number;
    static number(toNumber: string | number): string;
    static countDays(start: string | Date, end: string | Date): number;
    static getDateTimeSeconds(start: string | Date, end: string | Date): number;
    static ucwords(str: string): string;
    static getCurrentDateTime(format?: string): string;
    static getDateRange(start_date: string, end_date: string, separator?: string, format?: LibUtilsDate): string;
    static getDateAsFormat(input: string, format?: string): string;
    static telTo(number: string | number): void;
    static smsTo(number: string | number, message?: string): void;
    static mailTo(email: string, subject?: string, message?: string): void;
    static waTo(number: string, message?: string): void;
    static mapTo(title: string, latlong: string): void;
    static isValidLatLong(latlong: string): boolean;
    static mapDirectionTo(latlongFrom: string, latlongTo: string, travelmode: LibUtilsTravelMode): void;
    static copyToClipboard(string: string): Promise<any>;
    static colorAdjust(hex: string, lum: number): string;
    static escapeRegExp(str: string): string;
    static hexToRgba(hex: string, alpha: number): string;
    static download(url: string, onDownloaded: (file: string) => void): Promise<any>;
    static shorten(string: string): string;
    static share(message: string): void;
  }
  interface LibVersionProps {
  
  }
  interface LibVersionState {
  
  }
  class LibVersion extends LibComponent<LibVersionProps, LibVersionState> {
    static appVersion(): string;
    static isAutoUpdate(): boolean;
    static showDialog(title: string, message: string, link: string, onOk: (link: string) => void, onCancel: () => void): void;
    static closeApp(): void;
    static toStore(link: string): void;
    static onDone(res: any, msg: string): void;
    static check(): void;
    render(): any;
  }
  interface LibWebviewSourceProps {
    uri?: string,
    html?: string
  }
  interface LibWebviewProps {
    defaultHeight?: number,
    source: LibWebviewSourceProps,
    needAnimate?: boolean,
    AnimationDuration?: number,
    needAutoResetHeight?: boolean,
    onMessage?: any,
    bounces?: any,
    onLoadEnd?: any,
    style?: any,
    scrollEnabled?: any,
    automaticallyAdjustContentInsets?: any,
    scalesPageToFit?: any,
    onFinishLoad: () => void
  }
  interface LibWebviewState {
    height: number | undefined,
    source: any
  }
  class LibWebview extends LibComponent<LibWebviewProps, LibWebviewState> {
    constructor(props: LibWebviewProps);
    componentDidUpdate(prevProps: LibWebviewProps, prevState: LibWebviewState): void;
    gotoShow(): void;
    componentDidMount(): void;
    getMessageFromWebView(event: any): void;
    resetHeight(): void;
    resetSmallHeight(): void;
    static fixHtml(html: string): string;
    render(): any;
  }
  interface LibWorkerInit {
    task: string,
    taskId: string,
    result: (res: string) => void
  }
  interface LibWorkerProps {
    tasks?: LibWorkerInit[],
  }
  interface LibWorkerState {
  
  }
  class LibWorker extends Component<LibWorkerProps, LibWorkerState> {
    constructor(props: LibWorkerProps);
    static delete(taskId: string): void;
    static registerJob(name: string, func: Function): (params: any[], res: (data: any) => void) => void;
    static objToString(data: any): string;
    static jobOutput(data: any): void;
    static jobAsync(func: Function, params: (string | number | boolean)[], res: (data: any) => void): void;
    static job(func: Function, params: (string | number | boolean)[], res: (data: any) => void): void;
    static curl(url: string, options: any, result: (r: any) => void): void;
    static image(url: string, toSize: number, result: (r: string) => void): void;
    static dispatch(task: (id: string) => string, url: string, result: (r: string) => void): void;
    renderWorkers(): any;
    render(): any;
  }
  function LibWorker_data(): void;
  namespace LibWorker_dataProperty {
    var libWorkerData: any;}
  function UseCurl(initialWithLoading?: boolean, withProgressText?: string): [(uri: string, post: any, onDone: (res: any, msg: string) => void, debug?: 0 | 1) => void, boolean, string];
  namespace UseCurlProperty {}
  function UseForm<S>(formName: string, def?: S): [S, (a: string) => (v: any) => void, (a?: (x?: S) => void) => void, () => void, (x: S) => void];
  namespace UseFormProperty {}
  function UseForm_data(): void;
  namespace UseForm_dataProperty {
    var useFormData: any;}
  function UseForm_persist<S>(formName: string, def?: S): [S, (a: string) => (v: any) => void, (a?: (x?: S) => void) => void, () => void, (x: S) => void];
  namespace UseForm_persistProperty {}
  function UseSelector(a: (state: any) => any): any;
  namespace UseSelectorProperty {}
  class UserClass {
    static reducer(state: any, action: any): any;
    static create(user: any): Promise<void>;
    static load(callback?: (user?: any | null) => void): Promise<any>;
    static isLogin(callback: (user?: any | null) => void): Promise<any>;
    static delete(): Promise<any>;
    static pushToken(): Promise<any>;
  }
  class UserData {
    static register(name: string): void;
    static unregister(name: string): void;
    deleteAll(): void;
  }
  interface UserIndexProps {
  
  }
  interface UserIndexState {
    loading: boolean
  }
  function UserIndex(props: UserIndexProps): any;
  namespace UserIndexProperty {
    function reducer(state: any, action: any): any;
  }
  function UserIndex_data(): void;
  namespace UserIndex_dataProperty {
    var userIndexData: any;
    var userIndexNav: any;}
  interface UserLoginProps {
  
  }
  interface UserLoginState {
    sosmed: string,
    username: string,
    password: string,
    email: string,
    isLoading: boolean
  }
  class UserLogin extends LibComponent<UserLoginProps, UserLoginState> {
    constructor(props: UserLoginProps);
    onSuccessLogin(user: any): void;
    onFailedLogin(msg: string): void;
    attemptLogin(): void;
    render(): any;
  }
  interface UserMainProps {
  
  }
  interface UserMainState {
  
  }
  class UserMain extends LibComponent<UserMainProps, UserMainState> {
    constructor(props: UserMainProps);
    render(): any;
  }
  interface UserNotifbadgeProps {
    data: any[],
    onPress: () => void
  }
  interface UserNotifbadgeState {
  
  }
  class UserNotifbadge extends LibComponent<UserNotifbadgeProps, UserNotifbadgeState> {
    constructor(props: UserNotifbadgeProps);
    static mapStateToProps(state: any): any;
    componentDidMount(): void;
    render(): any;
  }
  interface UserNotificationProps {
    navigation: any,
    data: any[]
  }
  interface UserNotificationState {
  
  }
  class UserNotification extends LibComponent<UserNotificationProps, UserNotificationState> {
    static reducer(state: any, action: any): any;
    static add(id: number, user_id: number, group_id: number, title: string, message: string, params: string, status: 0 | 1 | 2, created?: string, updated?: string): void;
    static drop(): void;
    static user_notification_loadData(): void;
    static user_notification_fetchData(uri: string, post: any): void;
    static user_notification_parseData(res: any, uri: string): void;
    static user_notification_setRead(id: string | number): void;
    static mapStateToProps(state: any): Object;
    constructor(props: UserNotificationProps);
    componentDidMount(): void;
    render(): any;
  }
  interface UserNotificationProps {
    created: string,
    id: number,
    message: string,
    notif_id: number,
    params: string,
    return: string,
    status: number,
    title: string,
    updated: string,
    user_id: number,
  }
  function UserNotification_item(props: UserNotificationProps): any;
  namespace UserNotification_itemProperty {}
  interface ComponentProps {
    title: string,
    onPress: () => void
  }
  function ComponentButton(props: ComponentProps): any;
  namespace ComponentButtonProperty {}
  interface ComponentHeaderProps {
    title: string,
    home?: boolean,
    onPost?: () => void
  }
  function ComponentHeader(props: ComponentHeaderProps): any;
  namespace ComponentHeaderProperty {}
  class LibGcurl {
    genealogyRef(): firebase.database.Reference;
    genealogyIdRef(): firebase.database.Reference;
    genealogyId(callback: (id: string) => void): void;
    genealogySetId(): void;
    genealogyNextId(callback: (id: number) => void): void;
    genealogyList(callback: (s: any) => void): void;
    genealogyReg(par_id: number, name: string, gender: "m" | "f", callback: (insertId: string) => void): void;
    genealogyAddRel(id: string, rel_id: string): void;
    toastRef(): firebase.database.Reference;
    toastIdRef(): firebase.database.Reference;
    tokenRef(): firebase.database.Reference;
    tokenPost(token: string): void;
    registerToken(): void;
    push(to: any, title: string, msg: string): void;
    tokenPushAll(title: string, msg: string): void;
    toastPost(title: string, msg: string, callback: (a: any) => void): void;
    toastId(callback: (id: number) => void): void;
    toastList(callback: (list: any) => void): void;
    toastEdit(key: string, value: any, callback: (list: any) => void): void;
    toastDelete(key: string, callback: () => void): void;
    toastSetId(): void;
  }
  interface MainMainProps {
  
  }
  function MainMain(props: MainMainProps): any;
  namespace MainMainProperty {}
  interface MainMineProps {
  
  }
  function MainMine(props: MainMineProps): any;
  namespace MainMineProperty {}
  interface MainMine_confirmProps {
  
  }
  function MainMine_confirm(props: MainMine_confirmProps): any;
  namespace MainMine_confirmProperty {}
  interface MainPostProps {
  
  }
  function MainPost(props: MainPostProps): any;
  namespace MainPostProperty {}
  interface MainPost_itemProps {
    expand: boolean,
    msg: string,
    time: string,
    _key: string,
    title: string,
    admin: string,
    onDelete: () => void,
    onEdit: () => void
  }
  function MainPost_item(props: MainPost_itemProps): any;
  namespace MainPost_itemProperty {}
  interface MainPost_listProps {
  
  }
  function MainPost_list(props: MainPost_listProps): any;
  namespace MainPost_listProperty {}
  interface MainProfileProps {
  
  }
  function MainProfile(props: MainProfileProps): any;
  namespace MainProfileProperty {}
  interface MainProfile_childProps {
    number: string,
    name: string,
    select?: boolean,
    onPress?: (item: any) => void
  }
  function MainProfile_child(props: MainProfile_childProps): any;
  namespace MainProfile_childProperty {}
  interface MainRegisterProps {
  
  }
  function MainRegister(props: MainRegisterProps): any;
  namespace MainRegisterProperty {}
  interface MainSearchProps {
  
  }
  function MainSearch(props: MainSearchProps): any;
  namespace MainSearchProperty {}
  interface MainSearchProps {
  
  }
  function MainSearch1(props: MainSearchProps): any;
  namespace MainSearch1Property {}
  function UseGenealogy(): [() => void];
  namespace UseGenealogyProperty {
    function list(): useGlobalReturn<any>;
    function id(): useGlobalReturn<any>;
  }
  function UseToast(): [any, () => void];
  namespace UseToastProperty {
    function data(): useGlobalReturn<any>;
    function id(): useGlobalReturn<any>;
  }
	type LibNavigationRoutes = "content/audio" | "content/comment" | "content/comment_item" | "content/comment_list" | "content/config" | "content/detail" | "content/details" | "content/gallery" | "content/index" | "content/item" | "content/list" | "content/menu" | "content/search" | "content/video" | "content/zoom" | "lib/autoreload" | "lib/autoreload_data" | "lib/carrousel" | "lib/carrousel_snap" | "lib/collaps" | "lib/component" | "lib/context" | "lib/crypt" | "lib/curl" | "lib/datepicker" | "lib/dialog" | "lib/direct_image" | "lib/direct_text" | "lib/document" | "lib/effect" | "lib/focus" | "lib/icon" | "lib/image" | "lib/image_crop" | "lib/image_edit" | "lib/image_multi" | "lib/infinite" | "lib/input" | "lib/input_base" | "lib/input_base_data" | "lib/keyboard_avoid" | "lib/lazy" | "lib/list" | "lib/loading" | "lib/locale" | "lib/menu" | "lib/menusub" | "lib/navigation" | "lib/navigation_data" | "lib/net_status" | "lib/notification" | "lib/object" | "lib/picture" | "lib/pin" | "lib/progress" | "lib/roll" | "lib/scroll" | "lib/slidingup" | "lib/sociallogin" | "lib/sqlite" | "lib/statusbar" | "lib/style" | "lib/textstyle" | "lib/theme" | "lib/toast" | "lib/updater" | "lib/utils" | "lib/version" | "lib/webview" | "lib/worker" | "lib/worker_data" | "lib/gcurl" | "use/curl" | "use/form" | "use/form_data" | "use/form_persist" | "use/selector" | "use/genealogy" | "use/toast" | "user/class" | "user/data" | "user/index" | "user/index_data" | "user/login" | "user/main" | "user/notifbadge" | "user/notification" | "user/notification_item" | "component/button" | "component/header" | "main/main" | "main/mine" | "main/mine_confirm" | "main/post" | "main/post_item" | "main/post_list" | "main/profile" | "main/profile_child" | "main/register" | "main/search" | "main/search1"
}