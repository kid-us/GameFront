// Game Info
interface Store {
  id: number;
  name: string;
  domain: string;
  image_background: string;
}

export interface GameStores {
  id: number;
  store: Store;
}

export interface Developers {
  id: number;
  name: string;
}

export interface GameGenres {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Publisher {
  id: number;
  name: string;
}

interface Requirements {
  minimum: string;
  recommended: string;
}

interface PlatformRequirements {
  requirements: Requirements;
}

export interface GameDetails {
  id: number;
  name: string;
  background_image: string;
  background_image_additional: string;
  released: string;
  rating: number;
  playtime: number;
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  description: string;
  platforms: PlatformRequirements[];
  tags: Tag[];
  genres: GameGenres[];
  metacritic: number;
  stores: GameStores[];
  developers: Developers[];
}

export interface Similar {
  id: number;
  name: string;
  background_image: string;
  background_image_additional: string;
  released: string;
  rating: number;
  playtime: number;
}

// Screenshot
export interface Screenshots {
  id: number;
  image: string;
}

export interface ScreenshotResponse {
  results: Screenshots[];
}

export interface SimilarGamesFetch {
  count: number;
  results: Similar[];
}
