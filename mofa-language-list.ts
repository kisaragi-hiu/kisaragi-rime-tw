export {}; // mark this file as module
const countries: Country[] = await fetch(
  "https://www.mofa.gov.tw/OpenDataForm.aspx?s=A37697969F737464",
).then((r) => r.json());

interface Country {
  Name: string;
  EnName: string;
  SortName: string;
  EnSortName: string;
  Capital: string;
  EnCapital: string;
  NationalDay: string;
  JoinUNDay: string;
  AreaSize: string;
  Geographic: string;
  Religion: string;
  BilaterialRelations: string;
  MainBounds: string;
  ExchangeRate: string;
  FlagUrlLink: string;
  IsDiplomatic: boolean;
  Language: string;
  MainMedia: string;
  Population: string;
  Voltage: string;
  TimeDifference: string;
  MapUrlLink: string;
  PoliticalSystem: string;
  HistoryIntro: string;
  Parliament: string;
  Cabinet: string;
  Judiciary: string;
  Headman: string;
  FAMinister: string;
  MajorPoliticalParties: string;
  Politicalsituation: string;
  SocietyStatus: string;
  FinancialIncoming: string;
  ExportValue: string;
  ImportValue: string;
  ExportItem: string;
  ImportItem: string;
  MainExportCountries: string;
  MainImportCountries: string;
  ExportTo: string;
  ImportFrom: string;
  ScaleOrganiztion: string;
  ForeignRelationship: string;
  ForeignPolicy: string;
  VisaInformation: string;
  TimeRange: string;
  Resident: string;
  NationalFlag: string;
  AreaName: string;
  EnAreaName: string;
}

new Set(countries.map((c) => c.Language)).forEach((v) => console.log(v));
