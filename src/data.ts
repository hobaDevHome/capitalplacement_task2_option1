import type { MenuProps } from "antd";

interface Label {
  label: String;
  value: String;
}
interface FilterProps {
  lableText: String;
  optionsArray: Label[];
}

interface CandidateInfo {
  name: String;
  location: String;
  education: String;
  identifiers?: string[];
  areas?: String[];
  videos?: number;
  programs?: number;
}

export const FiltersSelectors: FilterProps[] = [
  {
    lableText: "Personal Information",
    optionsArray: [
      { label: "Name", value: "name" },
      { label: "Age", value: "age" },
      { label: "Nationality", value: "nationality" },
    ],
  },
  {
    lableText: "Education",
    optionsArray: [
      { label: "High School", value: "High School" },
      { label: "Bachelor's degree", value: "Bachelor's degree" },
      { label: "Diploma", value: "Diploma" },
    ],
  },
  {
    lableText: "Work Experience",
    optionsArray: [
      { label: "d3", value: "d3" },
      { label: "v3", value: "v3" },
    ],
  },
  {
    lableText: "Activity Filter",
    optionsArray: [
      { label: "Acitivity 1", value: "Acitivity 1" },
      { label: "Acitivity 2", value: "Acitivity 2" },
      { label: "Acitivity 3", value: "Acitivity 3" },
      { label: "Acitivity 4", value: "Acitivity 4" },
    ],
  },
  {
    lableText: "Advanced Filter",
    optionsArray: [
      { label: "Advanced Filter 1", value: "Advanced Filter 1" },
      { label: "Advanced Filter 2", value: "Advanced Filter 2" },
      { label: "Advanced Filter 3", value: "Advanced Filter 3" },
    ],
  },
];

export const candidatesData: CandidateInfo[] = [
  {
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    identifiers: ["#top_candidate", "#top_candidate"],
    areas: ["New York", "Marketing", "London"],
  },
  {
    name: "John Doe",
    location: "Bostom, USA",
    education: "Bachelor - MIT (2023 - 2023)",
    identifiers: ["#top_candidate", "#top_candidate"],
    areas: ["New York", "Marketing", "London"],
  },
  {
    name: "Kamilia Smith",
    location: "London, UK",
    education: "Bachelor - Boston University (2023 - 2023)",
    identifiers: ["#top_candidate", "#top_candidate"],
    areas: ["New York", "Marketing", "London"],
  },
  {
    name: "Thomas Matt",
    location: "Edinburgh, UK",
    education: "Bachelor - Harvard University (2023 - 2023)",
    identifiers: ["#top_candidate", "#top_candidate"],
    areas: ["New York", "Marketing", "London"],
  },
  {
    name: "Roy Jade",
    location: "Cambridge,  UK",
    education: "Bachelor - Yale (2023 - 2023)",
    identifiers: ["#top_candidate", "#top_candidate"],
    areas: ["New York", "Marketing", "London"],
  },
  {
    name: "Ahmed Salman",
    location: "New York, USA",
    education: "Bachelor - Cambridge University (2023 - 2023)",
    videos: 4,
    programs: 5,
  },
];

export const ItemsProps: MenuProps["items"] = [
  {
    label: "Applied",
    key: 1745,
  },
  {
    label: "Shortlisted",
    key: 453,
  },
  {
    label: "Technical Interview",
    key: 123,
  },
  {
    label: "Opportunity Browsing",
    key: 243,
  },
  {
    label: "Video Interview I",
    key: 25,
  },
  {
    label: "Video Interview II",
    key: 25,
  },
  {
    label: "Video Interview III",
    key: 25,
  },
  {
    label: "Offer",
    key: 25,
  },
  {
    label: "Withdrawn",
    key: 25,
  },
];

export const OpportunityBrowsingItems = [
  {
    label: "Applied",
    key: 1745,
  },
  {
    label: "Shortlisted",
    key: 453,
  },
  {
    label: "Technical Interview",
    key: 123,
  },
  {
    label: "Opportunity Browsing",
    key: 243,
  },
  {
    label: "Video Interview I",
    key: 25,
  },
  {
    label: "Video Interview II",
    key: 25,
  },
  {
    label: "Video Interview III",
    key: 25,
  },
  {
    label: "Offer",
    key: 25,
  },
  {
    label: "Withdrawn",
    key: 25,
  },
];
