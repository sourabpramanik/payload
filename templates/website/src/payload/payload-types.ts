/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    posts: Post;
    projects: Project;
    media: Media;
    categories: Category;
    users: User;
    comments: Comment;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
export interface Page {
  id: string;
  title: string;
  publishedDate?: string;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        invertBackground?: boolean;
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean;
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean;
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'posts' | 'projects';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Category {
  id: string;
  title?: string;
  parent?: string | Category;
  breadcrumbs?: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Post {
  id: string;
  title: string;
  categories?: string[] | Category[];
  publishedOn?: string;
  authors?: string[] | User[];
  populatedAuthors?: {
    id?: string;
    name?: string;
  }[];
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        invertBackground?: boolean;
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean;
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean;
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'posts' | 'projects';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  enablePremiumContent?: boolean;
  premiumContent?: (
    | {
        invertBackground?: boolean;
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean;
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean;
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'posts' | 'projects';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  relatedPosts?: string[] | Post[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'user')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Project {
  id: string;
  title: string;
  categories?: string[] | Category[];
  publishedDate?: string;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        invertBackground?: boolean;
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean;
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean;
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'posts' | 'projects';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocs?:
          | (
              | {
                  value: string;
                  relationTo: 'posts';
                }
              | {
                  value: string;
                  relationTo: 'projects';
                }
            )[]
          | (
              | {
                  value: Post;
                  relationTo: 'posts';
                }
              | {
                  value: Project;
                  relationTo: 'projects';
                }
            )[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  relatedProjects?: string[] | Project[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Comment {
  id: string;
  user?: string | User;
  populatedUser?: {
    id?: string;
    name?: string;
  };
  doc?: string | Post;
  comment?: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Settings {
  id: string;
  postsPage?: string | Page;
  projectsPage?: string | Page;
  updatedAt?: string;
  createdAt?: string;
}
export interface Header {
  id: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}