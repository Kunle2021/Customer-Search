export interface Customer {
    Id: number;
    Title: string;
    Firstname: string;
    Lastname: string;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    AddressLine4: string;
    Locality: string;
    Town: string;
    County: string;
    District: string;
    Postcode: string;
    Country: string;
    Latitude: number;
    Longitude: number;
    EmailAddress: string;
    Mobile: string | null; // Mobile can be null
    Telephone: string;
    Created: string;
    Modified: string;
    Leads: Lead[];
  }
  
export interface Lead {
    Id: number;
    CommunicationCode: string;
    EnquiryDate: string;
    Created: string;
    Modified: string;
    Status: LeadStatus;
    FormId: string;
    RequestSource: string;
    ProductGroup: string;
    ProductRange: string;
  }
  
export interface LeadStatus {
    Id: number;
    Description: string;
  }