/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  publishedAt?: string;
  excerpt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h2" | "h3" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    style?: "line" | "space";
    _type: "separator";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  } | {
    language?: "javascript" | "typescript" | "json" | "html";
    _type: "codeBlock";
    _key: string;
  }>;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h2" | "h3" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  style?: "line" | "space";
  _type: "separator";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
} | {
  language?: "javascript" | "typescript" | "json" | "html";
  _type: "codeBlock";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Post | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/queries.ts
// Variable: TOTAL_POSTS_QUERY
// Query: count(*[  _type == "post"  && defined(slug.current)  && isFeatured != true])
export type TOTAL_POSTS_QUERYResult = number;
// Variable: POSTS_QUERY
// Query: *[  _type == "post"  && defined(slug.current)  && (isFeatured != true)]|order(publishedAt desc)[$startIndex...$endIndex]{  title,  "slug": slug.current,  publishedAt,  excerpt,}
export type POSTS_QUERYResult = Array<{
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  excerpt: string | null;
}>;
// Variable: FEATURED_POSTS_QUERY
// Query: *[  _type == "post"  && isFeatured == true  && defined(slug.current)]|order(publishedAt desc)[0...$quantity]{  title,  "slug": slug.current,  publishedAt,  mainImage,  excerpt,}
export type FEATURED_POSTS_QUERYResult = Array<never>;
// Variable: FEED_POSTS_QUERY
// Query: *[  _type == "post"  && defined(slug.current)]|order(isFeatured, publishedAt desc){  title,  "slug": slug.current,  publishedAt,  mainImage,  excerpt,}
export type FEED_POSTS_QUERYResult = Array<{
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  mainImage: null;
  excerpt: string | null;
}>;
// Variable: POST_QUERY
// Query: *[  _type == "post"  && slug.current == $slug][0]{  publishedAt,  title,  mainImage,  excerpt,  body,}
export type POST_QUERYResult = {
  publishedAt: string | null;
  title: string | null;
  mainImage: null;
  excerpt: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h2" | "h3" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    language?: "html" | "javascript" | "json" | "typescript";
    _type: "codeBlock";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  } | {
    style?: "line" | "space";
    _type: "separator";
    _key: string;
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "count(*[\n  _type == \"post\"\n  && defined(slug.current)\n  && isFeatured != true\n])": TOTAL_POSTS_QUERYResult;
    "*[\n  _type == \"post\"\n  && defined(slug.current)\n  && (isFeatured != true)\n]|order(publishedAt desc)[$startIndex...$endIndex]{\n  title,\n  \"slug\": slug.current,\n  publishedAt,\n  excerpt,\n}": POSTS_QUERYResult;
    "*[\n  _type == \"post\"\n  && isFeatured == true\n  && defined(slug.current)\n]|order(publishedAt desc)[0...$quantity]{\n  title,\n  \"slug\": slug.current,\n  publishedAt,\n  mainImage,\n  excerpt,\n}": FEATURED_POSTS_QUERYResult;
    "*[\n  _type == \"post\"\n  && defined(slug.current)\n]|order(isFeatured, publishedAt desc){\n  title,\n  \"slug\": slug.current,\n  publishedAt,\n  mainImage,\n  excerpt,\n}": FEED_POSTS_QUERYResult;
    "*[\n  _type == \"post\"\n  && slug.current == $slug\n][0]{\n  publishedAt,\n  title,\n  mainImage,\n  excerpt,\n  body,\n}\n": POST_QUERYResult;
  }
}
