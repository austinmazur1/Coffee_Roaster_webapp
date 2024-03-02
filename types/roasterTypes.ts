interface Location {
  address: string;
  geo: {
    lat: number;
    lng: number;
  };
}

interface SocialMedia {
  instagram: {
    url: string;
    handle: string;
  };
}

interface ContactInfo {
  email: string;
  phoneNumber?: string;
}

export interface RoasterType {
  _id: string;
  name: string;
  location: Location;
  contactInfo: ContactInfo;
  website: string;
  socialMedia: SocialMedia;
  beans: string[];
}
