/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    'form-submissions': FormSubmission;
    studies: Study;
    categories: Category;
    pages: Page;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'form-submissions': FormSubmissionsSelect<false> | FormSubmissionsSelect<true>;
    studies: StudiesSelect<false> | StudiesSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    feature?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  source: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "studies".
 */
export interface Study {
  id: number;
  title: string;
  featuredImage: number | Media;
  layout?:
    | (
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            content: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            actions?:
              | {
                  link: {
                    type?: ('page' | 'custom') | null;
                    label: string;
                    page?: (number | null) | Page;
                    url?: string | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'call-to-action';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            columns?:
              | {
                  width: 'oneThird' | 'half' | 'twoThirds' | 'full';
                  alignment: 'left' | 'center' | 'right';
                  content: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  };
                  id?: string | null;
                }[]
              | null;
            accentLine?: boolean | null;
            accentLineAlignment?: ('left' | 'right') | null;
            paddingTop?: ('none' | 'small' | 'medium' | 'large') | null;
            paddingBottom?: ('none' | 'small' | 'medium' | 'large') | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            actions?:
              | {
                  headline: string;
                  link: {
                    type?: ('page' | 'custom') | null;
                    label: string;
                    page?: (number | null) | Page;
                    url?: string | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta-grid';
          }
        | {
            image: number | Media;
            type?: ('normal' | 'fullscreen' | 'wide') | null;
            caption?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image';
          }
        | {
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-collage';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            content: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            enableCTA?: boolean | null;
            link?: {
              type?: ('page' | 'custom') | null;
              label: string;
              page?: (number | null) | Page;
              url?: string | null;
            };
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-content-collage';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            content?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            images?:
              | {
                  image: number | Media;
                  content?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-grid';
          }
        | {
            stats?:
              | {
                  stat?: string | null;
                  description?: string | null;
                  id?: string | null;
                }[]
              | null;
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-stat-collage';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'slider';
          }
        | {
            size: 'small' | 'medium' | 'large';
            id?: string | null;
            blockName?: string | null;
            blockType: 'spacer';
          }
        | {
            topOverlap?: ('none' | 'small' | 'medium' | 'large') | null;
            bottomOverlap?: ('none' | 'small' | 'medium' | 'large') | null;
            stats?:
              | {
                  stat?: string | null;
                  description?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'statistics';
          }
        | {
            sections?:
              | {
                  label: string;
                  description: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'sticky-content';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            studies: (number | Study)[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'study-slider';
          }
      )[]
    | null;
  previewImages?:
    | {
        image: number | Media;
        id?: string | null;
      }[]
    | null;
  client?: string | null;
  location?: string | null;
  categories?: (number | Category)[] | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  heroType: 'minimal' | 'contentAboveImage' | 'contentLeftOfImage';
  heroContent: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  heroImage?: (number | null) | Media;
  layout?:
    | (
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            content: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            actions?:
              | {
                  link: {
                    type?: ('page' | 'custom') | null;
                    label: string;
                    page?: (number | null) | Page;
                    url?: string | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'call-to-action';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            columns?:
              | {
                  width: 'oneThird' | 'half' | 'twoThirds' | 'full';
                  alignment: 'left' | 'center' | 'right';
                  content: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  };
                  id?: string | null;
                }[]
              | null;
            accentLine?: boolean | null;
            accentLineAlignment?: ('left' | 'right') | null;
            paddingTop?: ('none' | 'small' | 'medium' | 'large') | null;
            paddingBottom?: ('none' | 'small' | 'medium' | 'large') | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            actions?:
              | {
                  headline: string;
                  link: {
                    type?: ('page' | 'custom') | null;
                    label: string;
                    page?: (number | null) | Page;
                    url?: string | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta-grid';
          }
        | {
            image: number | Media;
            type?: ('normal' | 'fullscreen' | 'wide') | null;
            caption?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image';
          }
        | {
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-collage';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            content: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            enableCTA?: boolean | null;
            link?: {
              type?: ('page' | 'custom') | null;
              label: string;
              page?: (number | null) | Page;
              url?: string | null;
            };
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-content-collage';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            content?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            images?:
              | {
                  image: number | Media;
                  content?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-grid';
          }
        | {
            stats?:
              | {
                  stat?: string | null;
                  description?: string | null;
                  id?: string | null;
                }[]
              | null;
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-stat-collage';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            images?:
              | {
                  image: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'slider';
          }
        | {
            size: 'small' | 'medium' | 'large';
            id?: string | null;
            blockName?: string | null;
            blockType: 'spacer';
          }
        | {
            topOverlap?: ('none' | 'small' | 'medium' | 'large') | null;
            bottomOverlap?: ('none' | 'small' | 'medium' | 'large') | null;
            stats?:
              | {
                  stat?: string | null;
                  description?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'statistics';
          }
        | {
            sections?:
              | {
                  label: string;
                  description: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'sticky-content';
          }
        | {
            backgroundColor?: ('none' | 'red' | 'blue' | 'orange') | null;
            studies: (number | Study)[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'study-slider';
          }
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    keywords?: string | null;
  };
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  title: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'form-submissions';
        value: number | FormSubmission;
      } | null)
    | ({
        relationTo: 'studies';
        value: number | Study;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        feature?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions_select".
 */
export interface FormSubmissionsSelect<T extends boolean = true> {
  name?: T;
  email?: T;
  message?: T;
  source?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "studies_select".
 */
export interface StudiesSelect<T extends boolean = true> {
  title?: T;
  featuredImage?: T;
  layout?:
    | T
    | {
        'call-to-action'?:
          | T
          | {
              backgroundColor?: T;
              content?: T;
              actions?:
                | T
                | {
                    link?:
                      | T
                      | {
                          type?: T;
                          label?: T;
                          page?: T;
                          url?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        content?:
          | T
          | {
              backgroundColor?: T;
              columns?:
                | T
                | {
                    width?: T;
                    alignment?: T;
                    content?: T;
                    id?: T;
                  };
              accentLine?: T;
              accentLineAlignment?: T;
              paddingTop?: T;
              paddingBottom?: T;
              id?: T;
              blockName?: T;
            };
        'cta-grid'?:
          | T
          | {
              actions?:
                | T
                | {
                    headline?: T;
                    link?:
                      | T
                      | {
                          type?: T;
                          label?: T;
                          page?: T;
                          url?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        image?:
          | T
          | {
              image?: T;
              type?: T;
              caption?: T;
              id?: T;
              blockName?: T;
            };
        'image-collage'?:
          | T
          | {
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'image-content-collage'?:
          | T
          | {
              backgroundColor?: T;
              content?: T;
              enableCTA?: T;
              link?:
                | T
                | {
                    type?: T;
                    label?: T;
                    page?: T;
                    url?: T;
                  };
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'image-grid'?:
          | T
          | {
              backgroundColor?: T;
              content?: T;
              images?:
                | T
                | {
                    image?: T;
                    content?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'image-stat-collage'?:
          | T
          | {
              stats?:
                | T
                | {
                    stat?: T;
                    description?: T;
                    id?: T;
                  };
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        slider?:
          | T
          | {
              backgroundColor?: T;
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        spacer?:
          | T
          | {
              size?: T;
              id?: T;
              blockName?: T;
            };
        statistics?:
          | T
          | {
              topOverlap?: T;
              bottomOverlap?: T;
              stats?:
                | T
                | {
                    stat?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'sticky-content'?:
          | T
          | {
              sections?:
                | T
                | {
                    label?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'study-slider'?:
          | T
          | {
              backgroundColor?: T;
              studies?: T;
              id?: T;
              blockName?: T;
            };
      };
  previewImages?:
    | T
    | {
        image?: T;
        id?: T;
      };
  client?: T;
  location?: T;
  categories?: T;
  slug?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        keywords?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  heroType?: T;
  heroContent?: T;
  heroImage?: T;
  layout?:
    | T
    | {
        'call-to-action'?:
          | T
          | {
              backgroundColor?: T;
              content?: T;
              actions?:
                | T
                | {
                    link?:
                      | T
                      | {
                          type?: T;
                          label?: T;
                          page?: T;
                          url?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        content?:
          | T
          | {
              backgroundColor?: T;
              columns?:
                | T
                | {
                    width?: T;
                    alignment?: T;
                    content?: T;
                    id?: T;
                  };
              accentLine?: T;
              accentLineAlignment?: T;
              paddingTop?: T;
              paddingBottom?: T;
              id?: T;
              blockName?: T;
            };
        'cta-grid'?:
          | T
          | {
              actions?:
                | T
                | {
                    headline?: T;
                    link?:
                      | T
                      | {
                          type?: T;
                          label?: T;
                          page?: T;
                          url?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        image?:
          | T
          | {
              image?: T;
              type?: T;
              caption?: T;
              id?: T;
              blockName?: T;
            };
        'image-collage'?:
          | T
          | {
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'image-content-collage'?:
          | T
          | {
              backgroundColor?: T;
              content?: T;
              enableCTA?: T;
              link?:
                | T
                | {
                    type?: T;
                    label?: T;
                    page?: T;
                    url?: T;
                  };
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'image-grid'?:
          | T
          | {
              backgroundColor?: T;
              content?: T;
              images?:
                | T
                | {
                    image?: T;
                    content?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'image-stat-collage'?:
          | T
          | {
              stats?:
                | T
                | {
                    stat?: T;
                    description?: T;
                    id?: T;
                  };
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        slider?:
          | T
          | {
              backgroundColor?: T;
              images?:
                | T
                | {
                    image?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        spacer?:
          | T
          | {
              size?: T;
              id?: T;
              blockName?: T;
            };
        statistics?:
          | T
          | {
              topOverlap?: T;
              bottomOverlap?: T;
              stats?:
                | T
                | {
                    stat?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'sticky-content'?:
          | T
          | {
              sections?:
                | T
                | {
                    label?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'study-slider'?:
          | T
          | {
              backgroundColor?: T;
              studies?: T;
              id?: T;
              blockName?: T;
            };
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        keywords?: T;
      };
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}