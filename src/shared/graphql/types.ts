/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
  JSON: { input: unknown; output: unknown; }
};

export type AdditionalListMetadata = {
  __typename?: 'AdditionalListMetadata';
  leadsCount?: Maybe<Scalars['Int']['output']>;
  projectsCount?: Maybe<Scalars['Int']['output']>;
};

export type AgentCompany = {
  __typename?: 'AgentCompany';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AgentLead = {
  __typename?: 'AgentLead';
  _id: Scalars['ID']['output'];
  company?: Maybe<AgentCompany>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<LeadStatus>;
};

export type Archive = {
  __typename?: 'Archive';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summ?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Attachment = {
  __typename?: 'Attachment';
  filename?: Maybe<Scalars['String']['output']>;
  partId?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type BaseElement = {
  activity?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  comment1?: InputMaybe<Scalars['String']['input']>;
  comment2?: InputMaybe<Scalars['String']['input']>;
  comment3?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  inn: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<Scalars['String']['input']>;
  revenue?: InputMaybe<Scalars['Float']['input']>;
};

export type BaseInput = {
  options: BaseOptionsInput;
  responsible_user_id: Scalars['String']['input'];
  tag: Scalars['String']['input'];
  xlData: Array<BaseElement>;
};

export type BaseOptionsInput = {
  checkMobilePhone: Scalars['Boolean']['input'];
  fixInn: Scalars['Boolean']['input'];
};

export type Beacon = {
  __typename?: 'Beacon';
  color?: Maybe<Scalars['String']['output']>;
  contract_id?: Maybe<Scalars['String']['output']>;
  date_of_issue?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  installation_date_fact?: Maybe<Scalars['String']['output']>;
  installation_date_plan?: Maybe<Scalars['String']['output']>;
  kit?: Maybe<Scalars['String']['output']>;
  manager_phone?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_address?: Maybe<Scalars['String']['output']>;
  provider_contact?: Maybe<Scalars['String']['output']>;
  provider_name?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type BotLeadInput = {
  birthday?: InputMaybe<Scalars['Date']['input']>;
  company_inn?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  company_phone?: InputMaybe<Scalars['String']['input']>;
  esignature_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CalcInput = {
  agentCom?: InputMaybe<Scalars['Float']['input']>;
  cadastral?: InputMaybe<Scalars['Float']['input']>;
  conditions?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Int']['input'];
  graphType?: InputMaybe<GraphType>;
  id?: InputMaybe<Scalars['ID']['input']>;
  leadId?: InputMaybe<Scalars['ID']['input']>;
  managerCom?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nds?: InputMaybe<Scalars['String']['input']>;
  prepaid: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  propType?: InputMaybe<PropertyTypes>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  stair?: InputMaybe<Scalars['Int']['input']>;
  strength?: InputMaybe<Scalars['Int']['input']>;
};

export type Candidate = {
  __typename?: 'Candidate';
  _id?: Maybe<Scalars['ID']['output']>;
  birthday?: Maybe<Scalars['Date']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  closed?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  phone?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  post?: Maybe<Scalars['String']['output']>;
  responsible_user?: Maybe<User>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type CandidateFilter = {
  closed?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CandidateInput = {
  birthday?: InputMaybe<Scalars['Date']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  closed?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  post?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Company = {
  __typename?: 'Company';
  _allNotesMeta?: Maybe<Scalars['Int']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  accreditation?: Maybe<Scalars['String']['output']>;
  activeTasks?: Maybe<Array<Maybe<Task>>>;
  balance_count?: Maybe<Scalars['String']['output']>;
  balance_summ?: Maybe<Scalars['String']['output']>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  diadoc?: Maybe<DiadocOrganization>;
  email?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  group?: Maybe<Group>;
  holding?: Maybe<Holding>;
  id: Scalars['ID']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  lastNote?: Maybe<Scalars['JSON']['output']>;
  leads?: Maybe<Array<Maybe<Lead>>>;
  limit_count?: Maybe<Scalars['String']['output']>;
  limit_summ?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  otherLeasing?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  partner_id?: Maybe<Scalars['String']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  rating?: Maybe<Scalars['String']['output']>;
  rating_date?: Maybe<Scalars['String']['output']>;
  responsible_user?: Maybe<User>;
  sign?: Maybe<Esignature>;
  sign_date?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompanyNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CompanyPhoneArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CompanyTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CompanyFilter = {
  activeTasks?: InputMaybe<Scalars['Boolean']['input']>;
  activityPeriod?: InputMaybe<PeriodFilter>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  delivered?: InputMaybe<Scalars['Boolean']['input']>;
  dept?: InputMaybe<Scalars['Boolean']['input']>;
  dept10?: InputMaybe<Scalars['Boolean']['input']>;
  dept30?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  equipment?: InputMaybe<Scalars['Boolean']['input']>;
  facePunch?: InputMaybe<Scalars['Boolean']['input']>;
  group_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hasPhone?: InputMaybe<Scalars['Boolean']['input']>;
  holding_id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inn?: InputMaybe<Scalars['String']['input']>;
  light?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  otkazSB?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  special?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workSB?: InputMaybe<Scalars['Boolean']['input']>;
  workUO?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompanyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsible_user_id: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact = {
  __typename?: 'Contact';
  _allNotesMeta?: Maybe<Scalars['Int']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  activeTasks?: Maybe<Array<Maybe<Task>>>;
  birthday?: Maybe<Scalars['Date']['output']>;
  call_source?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companies?: Maybe<Array<Maybe<Company>>>;
  company?: Maybe<Company>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  phone?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  post?: Maybe<Scalars['String']['output']>;
  responsible_user?: Maybe<User>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};


export type ContactNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ContactInput = {
  birthday?: InputMaybe<Scalars['Date']['input']>;
  call_source?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['String']['input']>;
  company_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  post?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Contract = {
  __typename?: 'Contract';
  archives?: Maybe<Array<Maybe<Archive>>>;
  balanceholder?: Maybe<Scalars['String']['output']>;
  beacons?: Maybe<Array<Maybe<Beacon>>>;
  contract_id?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  date_payment?: Maybe<Scalars['String']['output']>;
  debt?: Maybe<Scalars['String']['output']>;
  delivered?: Maybe<Scalars['Boolean']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  dz1?: Maybe<Scalars['String']['output']>;
  dz2?: Maybe<Scalars['String']['output']>;
  dz3?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  guarantor?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lead?: Maybe<Lead>;
  manager?: Maybe<User>;
  name: Scalars['String']['output'];
  note?: Maybe<Note>;
  notes?: Maybe<Array<Maybe<Note>>>;
  partner?: Maybe<Company>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  payments_remainder?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  property_name?: Maybe<Scalars['String']['output']>;
  property_sign?: Maybe<Scalars['String']['output']>;
  property_vin?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<ContractProvider>;
  signers?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  status_date?: Maybe<Scalars['Date']['output']>;
  summ?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type ContractFilter = {
  advance?: InputMaybe<Scalars['Boolean']['input']>;
  callCenter?: InputMaybe<Scalars['Boolean']['input']>;
  company_id?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  internet?: InputMaybe<Scalars['Boolean']['input']>;
  manager_id?: InputMaybe<Scalars['String']['input']>;
  partner_id?: InputMaybe<Scalars['ID']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  signed?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_date?: InputMaybe<PeriodFilter>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  unloaded?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContractInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ContractProvider = {
  __typename?: 'ContractProvider';
  id?: Maybe<Scalars['String']['output']>;
  inn?: Maybe<Scalars['String']['output']>;
  kpp?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Course = {
  __typename?: 'Course';
  _id?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  viewed?: Maybe<Scalars['Boolean']['output']>;
};

export type CourseFilter = {
  empty?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CourseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  link: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateEdoRouteInput = {
  edoRoute: EdoRouteInput;
  edoWaypoint: EdoWaypointInput;
  edoWaypointFile: Array<EdoWaypointFileInput>;
};

export type DiadocDocument = {
  __typename?: 'DiadocDocument';
  contract?: Maybe<Contract>;
  date?: Maybe<Scalars['Float']['output']>;
  documentId?: Maybe<Scalars['String']['output']>;
  document_view?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<Maybe<DiadocDocumentFile>>>;
  fromBoxId?: Maybe<Scalars['String']['output']>;
  fromTitle?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  kpp?: Maybe<Scalars['String']['output']>;
  messageId?: Maybe<Scalars['String']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  responsible?: Maybe<User>;
  signer?: Maybe<User>;
  toBoxId?: Maybe<Scalars['String']['output']>;
  toTitle?: Maybe<Scalars['String']['output']>;
};

export type DiadocDocumentFile = {
  __typename?: 'DiadocDocumentFile';
  attachmentType?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type DiadocDocumentsData = {
  __typename?: 'DiadocDocumentsData';
  documents?: Maybe<Array<Maybe<DiadocDocument>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DiadocEventsFilter = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  messageType?: InputMaybe<DiadocEventsMessageType>;
  orderBy?: InputMaybe<DiadocEventsOrderBy>;
  period?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export enum DiadocEventsMessageType {
  Draft = 'Draft',
  Letter = 'Letter',
  Template = 'Template'
}

export enum DiadocEventsOrderBy {
  Ascending = 'Ascending',
  Descending = 'Descending'
}

export type DiadocOrganization = {
  __typename?: 'DiadocOrganization';
  Boxes?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  FullName?: Maybe<Scalars['String']['output']>;
  HasCertificateToSign?: Maybe<Scalars['Boolean']['output']>;
  Inn?: Maybe<Scalars['String']['output']>;
  IsRoaming?: Maybe<Scalars['Boolean']['output']>;
  Kpp?: Maybe<Scalars['String']['output']>;
  LiquidationDate?: Maybe<Scalars['String']['output']>;
  OrgId?: Maybe<Scalars['String']['output']>;
  ShortName?: Maybe<Scalars['String']['output']>;
};

export type Directory = {
  __typename?: 'Directory';
  _id?: Maybe<Scalars['ID']['output']>;
  additional_phone?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  birthday: Scalars['Date']['output'];
  department: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  lastActivity?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  personal_phone?: Maybe<Scalars['String']['output']>;
  post: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  subdivision: Scalars['String']['output'];
  user_id?: Maybe<Scalars['String']['output']>;
  workphone?: Maybe<Scalars['String']['output']>;
};

export type DirectoryFilter = {
  additional_phone?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  department?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  personal_phone?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subdivision?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workphone?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryInput = {
  additional_phone?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isOnline?: InputMaybe<Scalars['Boolean']['input']>;
  lastActivity?: InputMaybe<Scalars['Date']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personal_phone?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subdivision?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  workphone?: InputMaybe<Scalars['String']['input']>;
};

export enum EdoOperator {
  Diadoc = 'diadoc',
  Sbis = 'sbis'
}

export type EdoRoute = {
  __typename?: 'EdoRoute';
  contract?: Maybe<Contract>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  responsible?: Maybe<User>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  waypoints?: Maybe<Array<Maybe<EdoWaypoint>>>;
};

export type EdoRouteInput = {
  contract_id: Scalars['ID']['input'];
  creator_id: Scalars['ID']['input'];
  responsible_id: Scalars['ID']['input'];
};

export type EdoWaypoint = {
  __typename?: 'EdoWaypoint';
  createdAt?: Maybe<Scalars['Date']['output']>;
  documents?: Maybe<Array<Maybe<EdoWaypointFile>>>;
  from_inn?: Maybe<Scalars['String']['output']>;
  from_name?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  operator?: Maybe<EdoOperator>;
  pack?: Maybe<Scalars['Boolean']['output']>;
  route?: Maybe<EdoRoute>;
  status?: Maybe<Scalars['String']['output']>;
  to_inn?: Maybe<Scalars['String']['output']>;
  to_kpp?: Maybe<Scalars['String']['output']>;
  to_name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type EdoWaypointFile = {
  __typename?: 'EdoWaypointFile';
  createdAt?: Maybe<Scalars['Date']['output']>;
  document_id?: Maybe<Scalars['String']['output']>;
  document_view?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['String']['output']>;
  fileext?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  message_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type EdoWaypointFileInput = {
  document_id: Scalars['String']['input'];
  document_view: Scalars['String']['input'];
  entity_id?: InputMaybe<Scalars['String']['input']>;
  fileext: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  message_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type EdoWaypointInput = {
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  from_inn?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  operator: EdoOperator;
  pack?: InputMaybe<Scalars['Boolean']['input']>;
  route_id: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  to_inn: Scalars['String']['input'];
  to_kpp?: InputMaybe<Scalars['String']['input']>;
  to_name: Scalars['String']['input'];
};

export type Esignature = {
  __typename?: 'Esignature';
  birthday?: Maybe<Scalars['Date']['output']>;
  birthplace?: Maybe<Scalars['String']['output']>;
  company_inn?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  esignature_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passport?: Maybe<Scalars['String']['output']>;
  passport_code?: Maybe<Scalars['String']['output']>;
  passport_date?: Maybe<Scalars['String']['output']>;
  passport_place?: Maybe<Scalars['String']['output']>;
  sms_date?: Maybe<Scalars['Date']['output']>;
  sms_key?: Maybe<Scalars['String']['output']>;
  sms_phone?: Maybe<Scalars['String']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
  user_inn?: Maybe<Scalars['String']['output']>;
  user_ip?: Maybe<Scalars['String']['output']>;
  user_phone?: Maybe<Scalars['String']['output']>;
};

export type EsignatureFilter = {
  company_inn?: InputMaybe<Scalars['String']['input']>;
};

export type EsignatureInput = {
  birthday: Scalars['Date']['input'];
  birthplace: Scalars['String']['input'];
  company_inn: Scalars['String']['input'];
  company_type?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  passport: Scalars['String']['input'];
  passport_code: Scalars['String']['input'];
  passport_date?: InputMaybe<Scalars['String']['input']>;
  passport_place: Scalars['String']['input'];
  sms_date: Scalars['Date']['input'];
  sms_key: Scalars['String']['input'];
  sms_phone: Scalars['String']['input'];
  user_address: Scalars['String']['input'];
  user_inn: Scalars['String']['input'];
  user_ip?: InputMaybe<Scalars['String']['input']>;
  user_phone: Scalars['String']['input'];
};

export type Event = {
  __typename?: 'Event';
  createdAt?: Maybe<Scalars['Date']['output']>;
  files?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  role?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type EventInput = {
  files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role?: InputMaybe<EventRole>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export enum EventRole {
  All = 'all',
  Manager = 'manager',
  Partner = 'partner'
}

export type FaqPopular = {
  __typename?: 'FaqPopular';
  answer: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pay?: Maybe<Scalars['String']['output']>;
  question: Scalars['String']['output'];
  theme: Scalars['String']['output'];
};

export type FullCalcInput = {
  agent?: InputMaybe<Scalars['JSON']['input']>;
  agentCom?: InputMaybe<Scalars['String']['input']>;
  balanceholder?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['JSON']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  financeAmount?: InputMaybe<Scalars['String']['input']>;
  graphType?: InputMaybe<Scalars['String']['input']>;
  hasPhasedFunding?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  individualGraph?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  inputPrice?: InputMaybe<Scalars['String']['input']>;
  isCalculation?: InputMaybe<Scalars['Boolean']['input']>;
  leadId?: InputMaybe<Scalars['ID']['input']>;
  managerCom?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nds?: InputMaybe<Scalars['String']['input']>;
  phasedFunding?: InputMaybe<Array<InputMaybe<PhasedFundingItemInput>>>;
  prepaid?: InputMaybe<Scalars['String']['input']>;
  prepaidDate?: InputMaybe<Scalars['String']['input']>;
  prepaidProc?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  propType?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['String']['input']>;
  stair?: InputMaybe<Scalars['String']['input']>;
  strength?: InputMaybe<Scalars['String']['input']>;
  subjectData?: InputMaybe<SubjectData>;
  wasInUse?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FullCalcUpdateInput = {
  agent?: InputMaybe<Scalars['JSON']['input']>;
  agentCom?: InputMaybe<Scalars['String']['input']>;
  balanceholder?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['JSON']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  exceptions?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  financeAmount?: InputMaybe<Scalars['String']['input']>;
  graphType?: InputMaybe<Scalars['String']['input']>;
  hasPhasedFunding?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  individualGraph?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  inputPrice?: InputMaybe<Scalars['String']['input']>;
  isCalculation?: InputMaybe<Scalars['Boolean']['input']>;
  managerCom?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nds?: InputMaybe<Scalars['String']['input']>;
  phasedFunding?: InputMaybe<Array<InputMaybe<PhasedFundingItemInput>>>;
  prepaid?: InputMaybe<Scalars['String']['input']>;
  prepaidDate?: InputMaybe<Scalars['String']['input']>;
  prepaidProc?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  propType?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['JSON']['input']>;
  rate?: InputMaybe<Scalars['String']['input']>;
  stair?: InputMaybe<Scalars['String']['input']>;
  strength?: InputMaybe<Scalars['String']['input']>;
  subjectData?: InputMaybe<SubjectUpdateData>;
  wasInUse?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum GraphType {
  Annuity = 'annuity',
  AnnuityStair = 'annuityStair',
  Drawdown = 'drawdown'
}

export type Group = {
  __typename?: 'Group';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Holding = {
  __typename?: 'Holding';
  _id?: Maybe<Scalars['ID']['output']>;
  companies?: Maybe<Array<Maybe<Company>>>;
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type HoldingBindInput = {
  company_id: Scalars['ID']['input'];
  holding_id: Scalars['ID']['input'];
};

export type HoldingCreateInput = {
  companies_id: Array<InputMaybe<Scalars['ID']['input']>>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type HoldingDeleteInput = {
  id: Scalars['ID']['input'];
};

export type HoldingFilter = {
  creator_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type HoldingUnbindInput = {
  company_id: Scalars['ID']['input'];
};

export type HoldingUpdateInput = {
  companies_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type InputSettings = {
  email_edoNotification?: InputMaybe<Scalars['Boolean']['input']>;
  email_report?: InputMaybe<Scalars['Boolean']['input']>;
  email_statusLeads?: InputMaybe<Scalars['Boolean']['input']>;
  email_tasks?: InputMaybe<Scalars['Boolean']['input']>;
  lazy_load?: InputMaybe<Scalars['Boolean']['input']>;
  max_contactBirthdayNotification?: InputMaybe<Scalars['Boolean']['input']>;
  max_edoNotification?: InputMaybe<Scalars['Boolean']['input']>;
  max_report?: InputMaybe<Scalars['Boolean']['input']>;
  max_spec_leads?: InputMaybe<Scalars['Boolean']['input']>;
  max_statusLeads?: InputMaybe<Scalars['Boolean']['input']>;
  max_tasks?: InputMaybe<Scalars['Boolean']['input']>;
  tg_contactBirthdayNotification?: InputMaybe<Scalars['Boolean']['input']>;
  tg_edoNotification?: InputMaybe<Scalars['Boolean']['input']>;
  tg_report?: InputMaybe<TgReport>;
  tg_spec_leads?: InputMaybe<Scalars['Boolean']['input']>;
  tg_statusLeads?: InputMaybe<Scalars['Boolean']['input']>;
  tg_tasks?: InputMaybe<Scalars['Boolean']['input']>;
};

export type KanbanLeads = {
  __typename?: 'KanbanLeads';
  data: Array<Maybe<KanbanLeadsData>>;
  meta: KanbanLeadsMeta;
};


export type KanbanLeadsDataArgs = {
  globalPagination?: InputMaybe<KanbanLeadsStatusGlobalPaginationInput>;
  pagination?: InputMaybe<Array<InputMaybe<KanbanLeadsStatusPaginationInput>>>;
};

export type KanbanLeadsColumn = {
  __typename?: 'KanbanLeadsColumn';
  count: Scalars['Int']['output'];
  field: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type KanbanLeadsData = {
  __typename?: 'KanbanLeadsData';
  count: Scalars['Int']['output'];
  data: Array<Maybe<Lead>>;
  statusName: Scalars['String']['output'];
  statusValue: Scalars['String']['output'];
};

export type KanbanLeadsFilter = {
  callCenter?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<PeriodFilter>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_group_id?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['Boolean']['input']>;
  group_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hasContracts?: InputMaybe<Scalars['Boolean']['input']>;
  hasProject?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  internet?: InputMaybe<Scalars['Boolean']['input']>;
  not_statuses?: InputMaybe<Array<InputMaybe<LeadStatus>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  roistat?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<LeadStatus>;
  statuses?: InputMaybe<Array<InputMaybe<LeadStatus>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updatedAt?: InputMaybe<PeriodFilter>;
};

export type KanbanLeadsMeta = {
  __typename?: 'KanbanLeadsMeta';
  columns: Array<Maybe<KanbanLeadsColumn>>;
  totalCount: Scalars['Int']['output'];
};

export type KanbanLeadsStatusGlobalPaginationInput = {
  limit: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
};

export type KanbanLeadsStatusPaginationInput = {
  limit: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  statusName: LeadStatus;
};

export type Lead = {
  __typename?: 'Lead';
  _allNotesMeta?: Maybe<Scalars['Int']['output']>;
  _id: Scalars['ID']['output'];
  activeTasks?: Maybe<Array<Maybe<Task>>>;
  calcPriceSum?: Maybe<Scalars['Float']['output']>;
  calculators?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  callCenter?: Maybe<Scalars['Boolean']['output']>;
  closed?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  contracts?: Maybe<Array<Maybe<Contract>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<User>;
  files?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  group?: Maybe<Group>;
  guarantors: Array<Maybe<Scalars['JSON']['output']>>;
  id: Scalars['ID']['output'];
  internet?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextTask?: Maybe<Task>;
  notes?: Maybe<Array<Maybe<Note>>>;
  product?: Maybe<Scalars['String']['output']>;
  projectCreatedAt?: Maybe<Scalars['Date']['output']>;
  projectNumber?: Maybe<Scalars['Int']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  responsible_user?: Maybe<User>;
  roistat?: Maybe<Scalars['String']['output']>;
  serviceComment?: Maybe<Note>;
  status?: Maybe<LeadStatus>;
  statusLog?: Maybe<Array<Maybe<StatusLog>>>;
  summ?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};


export type LeadNotesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LeadTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LeadFilter = {
  callCenter?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<PeriodFilter>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  created_by_group_id?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['Boolean']['input']>;
  group_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hasContracts?: InputMaybe<Scalars['Boolean']['input']>;
  hasProject?: InputMaybe<Scalars['Boolean']['input']>;
  hasStatusLog?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  internet?: InputMaybe<Scalars['Boolean']['input']>;
  not_created_by?: InputMaybe<Scalars['String']['input']>;
  not_responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  not_statuses?: InputMaybe<Array<InputMaybe<LeadStatus>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  roistat?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<LeadStatus>;
  statuses?: InputMaybe<Array<InputMaybe<LeadStatus>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  updatedAt?: InputMaybe<PeriodFilter>;
};

export type LeadInput = {
  closed?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  roistat?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LeadStatus>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  user_data?: InputMaybe<Scalars['JSON']['input']>;
};

export enum LeadStatus {
  Active = 'active',
  Ad = 'ad',
  Approved = 'approved',
  AtWork = 'atWork',
  AtWorkCallcenter = 'atWorkCallcenter',
  AtWorkManager = 'atWorkManager',
  Closed = 'closed',
  ClosedCallcenter = 'closedCallcenter',
  Created = 'created',
  Decision = 'decision',
  Dl = 'dl',
  Documents = 'documents',
  First = 'first',
  Meeting = 'meeting',
  Spam = 'spam',
  TransferredCallcenter = 'transferredCallcenter',
  TransferredToManager = 'transferredToManager'
}

export type ListMetadata = {
  __typename?: 'ListMetadata';
  additional?: Maybe<AdditionalListMetadata>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mail = {
  __typename?: 'Mail';
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  date?: Maybe<Scalars['Date']['output']>;
  flags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  from?: Maybe<Array<Maybe<MailAddressType>>>;
  id?: Maybe<Scalars['String']['output']>;
  replyTo?: Maybe<Array<Maybe<MailAddressType>>>;
  subject?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Array<Maybe<MailAddressType>>>;
  uid?: Maybe<Scalars['Int']['output']>;
};

export type MailAddressType = {
  __typename?: 'MailAddressType';
  address?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MailMessagesFilter = {
  client: Scalars['String']['input'];
};

export enum MailType {
  Receive = 'receive',
  Send = 'send'
}

export type MemoFilter = {
  period?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortDate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type MessageTemplate = {
  __typename?: 'MessageTemplate';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  responsible_id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAgentLead?: Maybe<Scalars['JSON']['output']>;
  addApplyLead?: Maybe<Lead>;
  addApplyNote?: Maybe<Note>;
  addBotLead?: Maybe<Lead>;
  addCalc?: Maybe<Scalars['JSON']['output']>;
  addCandidate?: Maybe<Candidate>;
  addCompany?: Maybe<Company>;
  addContact?: Maybe<Contact>;
  addDirectory?: Maybe<Directory>;
  addEsignature?: Maybe<Esignature>;
  addEvent?: Maybe<Event>;
  addFaqPopular?: Maybe<FaqPopular>;
  addFullCalc?: Maybe<Scalars['JSON']['output']>;
  addGuarantor?: Maybe<Scalars['JSON']['output']>;
  addLead?: Maybe<Lead>;
  addMessageTemplate?: Maybe<MessageTemplate>;
  addNote?: Maybe<Note>;
  addPreLead?: Maybe<Lead>;
  addQuestionAndAnswer?: Maybe<QuestionAndAnswer>;
  addSupportRequest?: Maybe<Array<Maybe<SupportRequest>>>;
  addTag?: Maybe<Tag>;
  addTask?: Maybe<Task>;
  addTasks?: Maybe<Task>;
  addTheme?: Maybe<Theme>;
  addTour?: Maybe<Tour>;
  addUserToShare?: Maybe<Scalars['Boolean']['output']>;
  asteriskStatus?: Maybe<Scalars['JSON']['output']>;
  attachMail?: Maybe<Scalars['Boolean']['output']>;
  authKeyGenerate?: Maybe<Scalars['Boolean']['output']>;
  bindCalc?: Maybe<Scalars['Boolean']['output']>;
  bindHolding?: Maybe<Company>;
  changeProjectParams?: Maybe<Scalars['JSON']['output']>;
  changeStatusSupportRequest?: Maybe<Scalars['JSON']['output']>;
  closeEdoRoute?: Maybe<EdoRoute>;
  closeSbisMessage?: Maybe<Scalars['JSON']['output']>;
  createActDeliver?: Maybe<Scalars['JSON']['output']>;
  createBeacon?: Maybe<Scalars['JSON']['output']>;
  createBuyout?: Maybe<Scalars['JSON']['output']>;
  createContract?: Maybe<Contract>;
  createCourse?: Maybe<Course>;
  createDiadocUser?: Maybe<Scalars['JSON']['output']>;
  createEdoRoute?: Maybe<EdoRoute>;
  createEdoWaypoint?: Maybe<EdoWaypoint>;
  createEdoWaypointFiles?: Maybe<Array<Maybe<EdoWaypointFile>>>;
  createHolding?: Maybe<Holding>;
  createMemo?: Maybe<Scalars['JSON']['output']>;
  createProject?: Maybe<Lead>;
  createSbisUser?: Maybe<Scalars['JSON']['output']>;
  deleteCandidates?: Maybe<Scalars['Boolean']['output']>;
  deleteCompanies?: Maybe<Scalars['Boolean']['output']>;
  deleteContacts?: Maybe<Scalars['Boolean']['output']>;
  deleteDirectory?: Maybe<Directory>;
  deleteEvent?: Maybe<Event>;
  deleteFaqPopular?: Maybe<Scalars['JSON']['output']>;
  deleteHolding?: Maybe<Holding>;
  deleteLeads?: Maybe<Scalars['Boolean']['output']>;
  deleteMessageTemplate?: Maybe<MessageTemplate>;
  deleteNote?: Maybe<Note>;
  deleteTag?: Maybe<Tag>;
  deleteTask?: Maybe<Task>;
  deleteTasks?: Maybe<Scalars['Boolean']['output']>;
  deleteTour?: Maybe<Tour>;
  deleteUserFromShare?: Maybe<Scalars['Boolean']['output']>;
  getActSverki: Scalars['String']['output'];
  hideContact?: Maybe<Contact>;
  loginUser: Scalars['String']['output'];
  makeCall?: Maybe<Scalars['Boolean']['output']>;
  maxActivation?: Maybe<Scalars['Boolean']['output']>;
  new1CEvent?: Maybe<Scalars['JSON']['output']>;
  newContract?: Maybe<Scalars['Boolean']['output']>;
  otherLeasing?: Maybe<Scalars['Boolean']['output']>;
  pickUpCompany?: Maybe<Scalars['Boolean']['output']>;
  pinNote?: Maybe<Note>;
  regPartner?: Maybe<Scalars['Boolean']['output']>;
  regSmsPartner?: Maybe<Scalars['Boolean']['output']>;
  registrationAgent?: Maybe<Scalars['String']['output']>;
  resendMail?: Maybe<Scalars['Boolean']['output']>;
  saveOnlyEsignature?: Maybe<Esignature>;
  setCourse?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  setTester?: Maybe<Scalars['Boolean']['output']>;
  startProject?: Maybe<Scalars['JSON']['output']>;
  tgActivation?: Maybe<Scalars['Boolean']['output']>;
  unbindHolding?: Maybe<Company>;
  unpinCourse?: Maybe<Scalars['JSON']['output']>;
  unpinGuarantor?: Maybe<Scalars['JSON']['output']>;
  unpinNote?: Maybe<Note>;
  updateAllCone?: Maybe<Scalars['Boolean']['output']>;
  updateCalc?: Maybe<Scalars['JSON']['output']>;
  updateCalcServices?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  updateCandidate?: Maybe<Candidate>;
  updateCandidates?: Maybe<Scalars['Boolean']['output']>;
  updateCompanies?: Maybe<Scalars['Boolean']['output']>;
  updateCompany?: Maybe<Company>;
  updateContact?: Maybe<Contact>;
  updateContacts?: Maybe<Scalars['Boolean']['output']>;
  updateContract?: Maybe<Contract>;
  updateDOTask?: Maybe<Scalars['Boolean']['output']>;
  updateDirectories?: Maybe<Array<Maybe<Directory>>>;
  updateEsignaturesFiles?: Maybe<Array<Maybe<Esignature>>>;
  updateEvent?: Maybe<Event>;
  updateFaqPopular?: Maybe<Scalars['JSON']['output']>;
  updateFullCalc?: Maybe<Scalars['JSON']['output']>;
  updateHolding?: Maybe<Holding>;
  updateLead?: Maybe<Lead>;
  updateLeads?: Maybe<Scalars['Boolean']['output']>;
  updateMessageTemplate?: Maybe<MessageTemplate>;
  updateNote?: Maybe<Note>;
  updatePartner?: Maybe<Partner>;
  updatePartnerLimit?: Maybe<Scalars['Boolean']['output']>;
  updateProject?: Maybe<Scalars['JSON']['output']>;
  updateQuestionAndAnswer?: Maybe<QuestionAndAnswer>;
  updateRating?: Maybe<Scalars['Boolean']['output']>;
  updateSettings?: Maybe<User>;
  updateSigners?: Maybe<Scalars['JSON']['output']>;
  updateTag?: Maybe<Tag>;
  updateTask?: Maybe<Task>;
  updateTasks?: Maybe<Scalars['Boolean']['output']>;
  updateTour?: Maybe<Tour>;
  updateTours?: Maybe<Array<Maybe<Tour>>>;
  updateUser?: Maybe<User>;
  uploadBase?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  userAuthPass?: Maybe<Scalars['String']['output']>;
  viewCourse?: Maybe<Scalars['Boolean']['output']>;
  viewMail?: Maybe<Scalars['Boolean']['output']>;
  viewTour?: Maybe<Scalars['Boolean']['output']>;
  viewTours?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAddAgentLeadArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};


export type MutationAddApplyLeadArgs = {
  input: LeadInput;
};


export type MutationAddApplyNoteArgs = {
  input: NoteInput;
};


export type MutationAddBotLeadArgs = {
  input?: InputMaybe<BotLeadInput>;
};


export type MutationAddCalcArgs = {
  input: CalcInput;
};


export type MutationAddCandidateArgs = {
  input: CandidateInput;
};


export type MutationAddCompanyArgs = {
  input: CompanyInput;
  isSbisInfo?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddContactArgs = {
  input: ContactInput;
};


export type MutationAddDirectoryArgs = {
  input: DirectoryInput;
};


export type MutationAddEsignatureArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: EsignatureInput;
};


export type MutationAddEventArgs = {
  input: EventInput;
};


export type MutationAddFaqPopularArgs = {
  answer: Scalars['String']['input'];
  pay?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
  theme: Scalars['String']['input'];
};


export type MutationAddFullCalcArgs = {
  input: FullCalcInput;
};


export type MutationAddGuarantorArgs = {
  inn: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddLeadArgs = {
  input: LeadInput;
};


export type MutationAddMessageTemplateArgs = {
  message: Scalars['String']['input'];
  responsible_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationAddNoteArgs = {
  input: NoteInput;
};


export type MutationAddPreLeadArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  roistat: Scalars['String']['input'];
};


export type MutationAddQuestionAndAnswerArgs = {
  question: Scalars['String']['input'];
  question_files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  support_request_id: Scalars['ID']['input'];
};


export type MutationAddSupportRequestArgs = {
  question: Scalars['String']['input'];
  question_files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  theme_id: Scalars['ID']['input'];
};


export type MutationAddTagArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddTaskArgs = {
  input: TaskInput;
};


export type MutationAddTasksArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  input: TaskInput;
};


export type MutationAddThemeArgs = {
  name: Scalars['String']['input'];
  prefilledText?: InputMaybe<Scalars['String']['input']>;
  priority: Scalars['String']['input'];
  responsible_ids: Array<Scalars['ID']['input']>;
};


export type MutationAddTourArgs = {
  input: TourInput;
};


export type MutationAddUserToShareArgs = {
  email: Scalars['String']['input'];
};


export type MutationAttachMailArgs = {
  password: Scalars['String']['input'];
};


export type MutationAuthKeyGenerateArgs = {
  email: Scalars['String']['input'];
};


export type MutationBindCalcArgs = {
  calcId: Scalars['String']['input'];
  leadId: Scalars['String']['input'];
};


export type MutationBindHoldingArgs = {
  input: HoldingBindInput;
};


export type MutationChangeProjectParamsArgs = {
  data: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  projectId: Scalars['String']['input'];
};


export type MutationChangeStatusSupportRequestArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCloseEdoRouteArgs = {
  route_id: Scalars['String']['input'];
};


export type MutationCloseSbisMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateActDeliverArgs = {
  contract_id: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationCreateBeaconArgs = {
  contract_id: Scalars['String']['input'];
  date_of_issue: Scalars['String']['input'];
  installation_date_plan: Scalars['String']['input'];
  kit: Scalars['String']['input'];
  manager_phone: Scalars['String']['input'];
  provider_address: Scalars['String']['input'];
  provider_contact: Scalars['String']['input'];
};


export type MutationCreateBuyoutArgs = {
  amount: Scalars['Float']['input'];
  date?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['String']['input'];
  save?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateContractArgs = {
  calcId: Scalars['String']['input'];
  contractType: Scalars['String']['input'];
  insurance: Scalars['String']['input'];
  leadId: Scalars['String']['input'];
  payer: Scalars['String']['input'];
};


export type MutationCreateCourseArgs = {
  input: CourseInput;
};


export type MutationCreateDiadocUserArgs = {
  box_id?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateEdoRouteArgs = {
  edoRoute: EdoRouteInput;
};


export type MutationCreateEdoWaypointArgs = {
  edoWaypoint: EdoWaypointInput;
};


export type MutationCreateEdoWaypointFilesArgs = {
  edoWaypointFiles: Array<EdoWaypointFileInput>;
};


export type MutationCreateHoldingArgs = {
  input: HoldingCreateInput;
};


export type MutationCreateMemoArgs = {
  input: Scalars['JSON']['input'];
};


export type MutationCreateProjectArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  origin?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  sop_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateSbisUserArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteCandidatesArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationDeleteCompaniesArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationDeleteContactsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationDeleteDirectoryArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFaqPopularArgs = {
  questionId?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteHoldingArgs = {
  input: HoldingDeleteInput;
};


export type MutationDeleteLeadsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationDeleteMessageTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTasksArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationDeleteTourArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserFromShareArgs = {
  email: Scalars['String']['input'];
};


export type MutationGetActSverkiArgs = {
  contractId?: InputMaybe<Scalars['String']['input']>;
  partnerId: Scalars['String']['input'];
  period?: InputMaybe<PeriodFilter>;
};


export type MutationHideContactArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationMakeCallArgs = {
  phone: Scalars['String']['input'];
};


export type MutationMaxActivationArgs = {
  token: Scalars['String']['input'];
};


export type MutationNew1CEventArgs = {
  input: Scalars['JSON']['input'];
};


export type MutationNewContractArgs = {
  input?: InputMaybe<Scalars['JSON']['input']>;
};


export type MutationOtherLeasingArgs = {
  inn: Scalars['String']['input'];
  list: Array<InputMaybe<Scalars['JSON']['input']>>;
};


export type MutationPickUpCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPinNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegPartnerArgs = {
  inn: Scalars['String']['input'];
};


export type MutationRegSmsPartnerArgs = {
  email: Scalars['String']['input'];
  inn: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationRegistrationAgentArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationResendMailArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSaveOnlyEsignatureArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: SaveOnlyEsignatureInput;
};


export type MutationSetCourseArgs = {
  courseId: Scalars['String']['input'];
  deadline: Scalars['Date']['input'];
  userIds: Array<Scalars['String']['input']>;
};


export type MutationSetTesterArgs = {
  value: Scalars['Boolean']['input'];
};


export type MutationStartProjectArgs = {
  id: Scalars['String']['input'];
};


export type MutationTgActivationArgs = {
  token: Scalars['String']['input'];
};


export type MutationUnbindHoldingArgs = {
  input: HoldingUnbindInput;
};


export type MutationUnpinCourseArgs = {
  course_id: Scalars['String']['input'];
  user_ids: Array<Scalars['String']['input']>;
};


export type MutationUnpinGuarantorArgs = {
  inn: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationUnpinNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCalcArgs = {
  input: CalcInput;
};


export type MutationUpdateCalcServicesArgs = {
  calcId: Scalars['String']['input'];
  input: Array<InputMaybe<Scalars['JSON']['input']>>;
};


export type MutationUpdateCandidateArgs = {
  input: CandidateInput;
};


export type MutationUpdateCandidatesArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCompaniesArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateContactArgs = {
  input: ContactInput;
};


export type MutationUpdateContactsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateContractArgs = {
  input: ContractInput;
};


export type MutationUpdateDoTaskArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  registry_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDirectoriesArgs = {
  input?: InputMaybe<Array<InputMaybe<DirectoryInput>>>;
};


export type MutationUpdateEsignaturesFilesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationUpdateEventArgs = {
  input: EventInput;
};


export type MutationUpdateFaqPopularArgs = {
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  oldTheme?: InputMaybe<Scalars['String']['input']>;
  pay?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFullCalcArgs = {
  input: FullCalcUpdateInput;
};


export type MutationUpdateHoldingArgs = {
  id: Scalars['ID']['input'];
  input: HoldingUpdateInput;
};


export type MutationUpdateLeadArgs = {
  input: LeadInput;
};


export type MutationUpdateLeadsArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LeadStatus>;
};


export type MutationUpdateMessageTemplateArgs = {
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateNoteArgs = {
  input: NoteInput;
};


export type MutationUpdatePartnerArgs = {
  id: Scalars['ID']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdatePartnerLimitArgs = {
  inn: Scalars['String']['input'];
};


export type MutationUpdateProjectArgs = {
  input: Scalars['JSON']['input'];
  objectId: Scalars['ID']['input'];
  objectType: Scalars['String']['input'];
};


export type MutationUpdateQuestionAndAnswerArgs = {
  answer: Scalars['String']['input'];
  answer_files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRatingArgs = {
  inn: Scalars['String']['input'];
};


export type MutationUpdateSettingsArgs = {
  input: InputSettings;
};


export type MutationUpdateSignersArgs = {
  contract_id: Scalars['String']['input'];
  signers: Scalars['JSON']['input'];
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateTaskArgs = {
  input: TaskInput;
};


export type MutationUpdateTasksArgs = {
  complete_till_at?: InputMaybe<Scalars['Date']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTourArgs = {
  input: TourInput;
};


export type MutationUpdateToursArgs = {
  input: Array<InputMaybe<TourInput>>;
};


export type MutationUpdateUserArgs = {
  abonentId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  maxId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
  telegramId?: InputMaybe<Scalars['String']['input']>;
  workphone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUploadBaseArgs = {
  input: BaseInput;
};


export type MutationUserAuthPassArgs = {
  authToken: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationViewCourseArgs = {
  link: Scalars['String']['input'];
};


export type MutationViewMailArgs = {
  uid: Scalars['String']['input'];
};


export type MutationViewTourArgs = {
  id: Scalars['String']['input'];
};


export type MutationViewToursArgs = {
  ids: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Note = {
  __typename?: 'Note';
  _id: Scalars['ID']['output'];
  attachments?: Maybe<Array<Maybe<NoteAttachment>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<User>;
  element?: Maybe<Scalars['JSON']['output']>;
  element_type?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  is_editable?: Maybe<Scalars['Boolean']['output']>;
  note_type?: Maybe<Scalars['String']['output']>;
  responsible_user?: Maybe<User>;
  text?: Maybe<Scalars['String']['output']>;
};

export type NoteAttachment = {
  __typename?: 'NoteAttachment';
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type NoteFilter = {
  element_id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type NoteInput = {
  element_id?: InputMaybe<Scalars['String']['input']>;
  element_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_editable?: InputMaybe<Scalars['Boolean']['input']>;
  note_type?: InputMaybe<NoteType>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum NoteType {
  CallIn = 'Call_in',
  CallOut = 'Call_out',
  Common = 'Common',
  Service = 'Service'
}

export type Partner = {
  __typename?: 'Partner';
  adresD?: Maybe<Scalars['String']['output']>;
  adresU?: Maybe<Scalars['String']['output']>;
  bank?: Maybe<Scalars['String']['output']>;
  bik?: Maybe<Scalars['String']['output']>;
  contracts?: Maybe<Array<Maybe<Contract>>>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  isemail?: Maybe<Scalars['Boolean']['output']>;
  kpp?: Maybe<Scalars['String']['output']>;
  ks?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<User>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rs?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};


export type PartnerContractsArgs = {
  filter?: InputMaybe<ContractFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerFilter = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type Payment = {
  __typename?: 'Payment';
  date?: Maybe<Scalars['String']['output']>;
  paid?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<Scalars['String']['output']>;
};

export type PeriodFilter = {
  end?: InputMaybe<Scalars['Date']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
};

export type PhasedFundingItemInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  n?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['String']['input']>;
  realName?: InputMaybe<Scalars['String']['input']>;
  share?: InputMaybe<Scalars['String']['input']>;
  sum?: InputMaybe<Scalars['String']['input']>;
};

export type PrefillProject = {
  __typename?: 'PrefillProject';
  company_data?: Maybe<Scalars['JSON']['output']>;
  contact_data?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
};

export type Project = {
  __typename?: 'Project';
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  manager?: Maybe<User>;
  partner?: Maybe<Partner>;
  product?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ProjectFilter = {
  group_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  partner_id?: InputMaybe<Scalars['ID']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export enum PropertyTypes {
  Commercial = 'commercial',
  Equipment = 'equipment',
  Light = 'light',
  Lightcommercial = 'lightcommercial',
  RealEstate = 'realEstate',
  ResidentialEstate = 'residentialEstate',
  Special = 'special'
}

export type Query = {
  __typename?: 'Query';
  Candidate?: Maybe<Candidate>;
  Company?: Maybe<Company>;
  CompanyAgentByInn?: Maybe<Scalars['JSON']['output']>;
  CompanyByInn?: Maybe<Company>;
  Contact?: Maybe<Contact>;
  Contract?: Maybe<Contract>;
  Directory?: Maybe<Directory>;
  DownloadMailMessages?: Maybe<Scalars['Boolean']['output']>;
  ElementAgentNotes?: Maybe<Array<Maybe<Note>>>;
  Esignature?: Maybe<Esignature>;
  Event?: Maybe<Event>;
  FaqPopular?: Maybe<FaqPopular>;
  Holding?: Maybe<Holding>;
  Lead?: Maybe<Lead>;
  MailAttachment?: Maybe<Scalars['JSON']['output']>;
  MailMessage?: Maybe<Mail>;
  MailMessages: Array<Maybe<ShortMail>>;
  MessageTemplate?: Maybe<MessageTemplate>;
  Note?: Maybe<Note>;
  Partner?: Maybe<Partner>;
  PartnerForInn?: Maybe<Scalars['JSON']['output']>;
  PartnerForUid?: Maybe<Partner>;
  PrefillProject?: Maybe<PrefillProject>;
  Project?: Maybe<Project>;
  SupportRequest?: Maybe<SupportRequest>;
  Tag?: Maybe<Tag>;
  Task?: Maybe<Task>;
  Theme?: Maybe<Theme>;
  Tour?: Maybe<Tour>;
  User?: Maybe<User>;
  _allCalculatorsMeta?: Maybe<ListMetadata>;
  _allCandidatesMeta?: Maybe<ListMetadata>;
  _allCompaniesMeta?: Maybe<ListMetadata>;
  _allContactsMeta?: Maybe<ListMetadata>;
  _allContractsMeta?: Maybe<ListMetadata>;
  _allDirectoriesMeta?: Maybe<ListMetadata>;
  _allDoTasksMeta?: Maybe<ListMetadata>;
  _allLeadsMeta?: Maybe<ListMetadata>;
  _allMemosMeta?: Maybe<ListMetadata>;
  _allPartnersMeta?: Maybe<ListMetadata>;
  _allProjectsMeta?: Maybe<ListMetadata>;
  _allTagsMeta?: Maybe<ListMetadata>;
  _allTasksMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  _appealMeta?: Maybe<ListMetadata>;
  _supportMeta?: Maybe<ListMetadata>;
  _unprocessedLeadsMeta?: Maybe<ListMetadata>;
  agentList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allCalculators?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allCandidates?: Maybe<Array<Maybe<Candidate>>>;
  allClientContacts?: Maybe<Array<Maybe<Contact>>>;
  allClientLeads?: Maybe<Scalars['JSON']['output']>;
  allCompanies?: Maybe<Array<Maybe<Company>>>;
  allContacts?: Maybe<Array<Maybe<Contact>>>;
  allContracts?: Maybe<Array<Maybe<Contract>>>;
  allCourses?: Maybe<Array<Maybe<Course>>>;
  allDepartments: Array<Maybe<Scalars['String']['output']>>;
  allDirectories?: Maybe<Array<Maybe<Directory>>>;
  allDoTasks?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allEmployeeDoTasks?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allEsignature?: Maybe<Array<Maybe<Esignature>>>;
  allEvents?: Maybe<Array<Maybe<Event>>>;
  allFaqPopular?: Maybe<Array<Maybe<FaqPopular>>>;
  allFaqResponsible?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allGroups?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allHoldings?: Maybe<Array<Maybe<Holding>>>;
  allKanbanLeads?: Maybe<KanbanLeads>;
  allLeadDoTasks?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allLeads?: Maybe<Array<Maybe<Lead>>>;
  allMemoContracts?: Maybe<Array<Maybe<Contract>>>;
  allMemoThemes?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allMemos?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  allMessageTemplates?: Maybe<Array<Maybe<MessageTemplate>>>;
  allPartners?: Maybe<Array<Maybe<Partner>>>;
  allProjects?: Maybe<Array<Maybe<Project>>>;
  allRoistatLeads?: Maybe<Array<Maybe<Lead>>>;
  allSubdivisions: Array<Maybe<Scalars['String']['output']>>;
  allTags?: Maybe<Array<Maybe<Tag>>>;
  allTasks?: Maybe<Array<Maybe<Task>>>;
  allThemes?: Maybe<Array<Maybe<Theme>>>;
  allTours?: Maybe<Array<Maybe<Tour>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  allUsersCourses?: Maybe<Array<Maybe<User>>>;
  bankList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  calcServices?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  calcServicesList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  checkCompany?: Maybe<Scalars['JSON']['output']>;
  checkProject?: Maybe<Scalars['JSON']['output']>;
  checkTgUser?: Maybe<Scalars['Boolean']['output']>;
  clientSupportRequests?: Maybe<Array<Maybe<SupportRequest>>>;
  contractsData?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  counteragentSignedDiadocDocuments?: Maybe<Scalars['JSON']['output']>;
  counteragentSignedSbisDocuments?: Maybe<Scalars['JSON']['output']>;
  diadocDocuments?: Maybe<DiadocDocumentsData>;
  docVisas?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documentTypes?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  edoRoutes?: Maybe<Array<Maybe<EdoRoute>>>;
  edoSigners?: Maybe<Array<Maybe<User>>>;
  getCalc?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  getCompany?: Maybe<Scalars['JSON']['output']>;
  getFilterUsers?: Maybe<Scalars['JSON']['output']>;
  getNotificationTrigger?: Maybe<Scalars['Boolean']['output']>;
  getNotifications?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  getPropertyReport?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  getReport?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  getWidget?: Maybe<Scalars['JSON']['output']>;
  guarantor?: Maybe<Scalars['JSON']['output']>;
  individualTryFullCalc?: Maybe<Scalars['JSON']['output']>;
  lastEvents?: Maybe<Array<Maybe<Event>>>;
  leadStatusList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  maketList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  managerSupportRequests?: Maybe<Array<Maybe<SupportRequest>>>;
  me?: Maybe<User>;
  newDiadocDocuments?: Maybe<Scalars['JSON']['output']>;
  newDiadocEvents?: Maybe<Scalars['JSON']['output']>;
  otherLeasing: Array<Maybe<Scalars['JSON']['output']>>;
  privateCompanies?: Maybe<Array<Maybe<Company>>>;
  projectLeads?: Maybe<Array<Maybe<Lead>>>;
  projectProperties?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  projects?: Maybe<Array<Maybe<Lead>>>;
  providerList?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  sbisDocuments?: Maybe<DiadocDocumentsData>;
  shared?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  showPubSub?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tryCalc?: Maybe<Scalars['JSON']['output']>;
  tryFullCalc?: Maybe<Scalars['JSON']['output']>;
  userForAdmin?: Maybe<User>;
};


export type QueryCandidateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyAgentByInnArgs = {
  inn: Scalars['String']['input'];
};


export type QueryCompanyByInnArgs = {
  inn: Scalars['String']['input'];
};


export type QueryContactArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContractArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDirectoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  user_oid?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryElementAgentNotesArgs = {
  element_id: Scalars['String']['input'];
  element_type: Scalars['String']['input'];
};


export type QueryEsignatureArgs = {
  filter?: InputMaybe<EsignatureFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFaqPopularArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHoldingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLeadArgs = {
  id: Scalars['ID']['input'];
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMailAttachmentArgs = {
  partId?: InputMaybe<Scalars['String']['input']>;
  uidMessage?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMailMessageArgs = {
  uidMessage: Scalars['String']['input'];
};


export type QueryMailMessagesArgs = {
  filter: MailMessagesFilter;
};


export type QueryMessageTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNoteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPartnerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPartnerForUidArgs = {
  partner_id: Scalars['String']['input'];
};


export type QueryPrefillProjectArgs = {
  leadId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySupportRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryThemeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTourArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllCalculatorsMetaArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  free?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllCandidatesMetaArgs = {
  filter?: InputMaybe<CandidateFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllCompaniesMetaArgs = {
  filter?: InputMaybe<CompanyFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllContactsMetaArgs = {
  filter?: InputMaybe<ContactFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllContractsMetaArgs = {
  filter?: InputMaybe<ContractFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllDirectoriesMetaArgs = {
  filter?: InputMaybe<DirectoryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllLeadsMetaArgs = {
  filter?: InputMaybe<LeadFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllMemosMetaArgs = {
  filter: MemoFilter;
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type Query_AllPartnersMetaArgs = {
  filter?: InputMaybe<PartnerFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllProjectsMetaArgs = {
  filter?: InputMaybe<ProjectFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllTagsMetaArgs = {
  filter?: InputMaybe<TagFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllTasksMetaArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllCalculatorsArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  free?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllCandidatesArgs = {
  filter?: InputMaybe<CandidateFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllClientContactsArgs = {
  companyIds: Array<Scalars['ID']['input']>;
};


export type QueryAllCompaniesArgs = {
  filter?: InputMaybe<CompanyFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllContactsArgs = {
  filter?: InputMaybe<ContactFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllContractsArgs = {
  filter?: InputMaybe<ContractFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllDirectoriesArgs = {
  filter?: InputMaybe<DirectoryFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllEventsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllHoldingsArgs = {
  input?: InputMaybe<HoldingFilter>;
};


export type QueryAllKanbanLeadsArgs = {
  filter?: InputMaybe<KanbanLeadsFilter>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllLeadDoTasksArgs = {
  id: Scalars['String']['input'];
};


export type QueryAllLeadsArgs = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LeadFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllMemosArgs = {
  filter: MemoFilter;
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryAllMessageTemplatesArgs = {
  responsible_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllPartnersArgs = {
  filter?: InputMaybe<PartnerFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllProjectsArgs = {
  filter?: InputMaybe<ProjectFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllRoistatLeadsArgs = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LeadFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllTagsArgs = {
  filter?: InputMaybe<TagFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllUsersCoursesArgs = {
  filter?: InputMaybe<CourseFilter>;
};


export type QueryBankListArgs = {
  bik: Scalars['String']['input'];
};


export type QueryCalcServicesArgs = {
  calc_id: Scalars['String']['input'];
};


export type QueryCheckCompanyArgs = {
  id: Scalars['ID']['input'];
  inn: Scalars['String']['input'];
};


export type QueryCheckProjectArgs = {
  id: Scalars['ID']['input'];
  inn?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckTgUserArgs = {
  tgId: Scalars['String']['input'];
};


export type QueryContractsDataArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryDiadocDocumentsArgs = {
  refreshKey?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDocVisasArgs = {
  doc: Scalars['String']['input'];
};


export type QueryEdoSignersArgs = {
  operator?: InputMaybe<EdoOperator>;
};


export type QueryGetCalcArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCompanyArgs = {
  inn: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetNotificationsArgs = {
  sort?: InputMaybe<PeriodFilter>;
};


export type QueryGetPropertyReportArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<PeriodFilter>;
};


export type QueryGetReportArgs = {
  analytic?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<PeriodFilter>;
};


export type QueryGetWidgetArgs = {
  filter?: InputMaybe<Scalars['JSON']['input']>;
  rerenderKey?: InputMaybe<Scalars['Int']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  sort?: InputMaybe<PeriodFilter>;
};


export type QueryGuarantorArgs = {
  id: Scalars['ID']['input'];
  inn: Scalars['String']['input'];
};


export type QueryIndividualTryFullCalcArgs = {
  input: FullCalcInput;
};


export type QueryNewDiadocEventsArgs = {
  filter?: InputMaybe<DiadocEventsFilter>;
};


export type QueryOtherLeasingArgs = {
  conturfocus?: InputMaybe<Scalars['Boolean']['input']>;
  inn: Scalars['String']['input'];
};


export type QueryPrivateCompaniesArgs = {
  filter?: InputMaybe<CompanyFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectPropertiesArgs = {
  id: Scalars['String']['input'];
};


export type QueryProjectsArgs = {
  projectIds: Array<Scalars['String']['input']>;
};


export type QueryProviderListArgs = {
  inn?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySbisDocumentsArgs = {
  refreshKey?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTryCalcArgs = {
  input: CalcInput;
};


export type QueryTryFullCalcArgs = {
  input: FullCalcInput;
};


export type QueryUserForAdminArgs = {
  id: Scalars['ID']['input'];
};

export type QuestionAndAnswer = {
  __typename?: 'QuestionAndAnswer';
  answer?: Maybe<Scalars['String']['output']>;
  answer_files?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  created_date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
  question_files?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  support_request: SupportRequest;
  updated_date: Scalars['Date']['output'];
};

export type SaveOnlyEsignatureInput = {
  birthday: Scalars['Date']['input'];
  birthplace: Scalars['String']['input'];
  company_inn: Scalars['String']['input'];
  company_type?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  passport: Scalars['String']['input'];
  passport_code: Scalars['String']['input'];
  passport_date?: InputMaybe<Scalars['String']['input']>;
  passport_place: Scalars['String']['input'];
  sms_date?: InputMaybe<Scalars['Date']['input']>;
  sms_key?: InputMaybe<Scalars['String']['input']>;
  sms_phone?: InputMaybe<Scalars['String']['input']>;
  user_address: Scalars['String']['input'];
  user_inn: Scalars['String']['input'];
  user_ip?: InputMaybe<Scalars['String']['input']>;
  user_phone: Scalars['String']['input'];
};

export type ShortMail = {
  __typename?: 'ShortMail';
  company_address?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<MailType>;
  uid?: Maybe<Scalars['Int']['output']>;
  user_address?: Maybe<Scalars['String']['output']>;
  viewed?: Maybe<Scalars['Boolean']['output']>;
};

export type SignedDocumentFile = {
  __typename?: 'SignedDocumentFile';
  downloadLink?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
};

export type SignedDocumentList = {
  __typename?: 'SignedDocumentList';
  attachments?: Maybe<Array<Maybe<SignedDocumentFile>>>;
  companyName?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Status = {
  __typename?: 'Status';
  _id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type StatusLog = {
  __typename?: 'StatusLog';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<Status>;
  user?: Maybe<User>;
};

export type SubjectData = {
  adresDKP?: InputMaybe<Scalars['String']['input']>;
  adresDL?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  chassis?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  commentSubject?: InputMaybe<Scalars['String']['input']>;
  conditions?: InputMaybe<Scalars['String']['input']>;
  engine?: InputMaybe<Scalars['String']['input']>;
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  pts?: InputMaybe<Scalars['String']['input']>;
  pts_date?: InputMaybe<Scalars['String']['input']>;
  srokPostavki?: InputMaybe<Scalars['String']['input']>;
  srokPostavkiDni?: InputMaybe<Scalars['String']['input']>;
  tehChar?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  wasInUse?: InputMaybe<Scalars['Boolean']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type SubjectUpdateData = {
  adresDKP?: InputMaybe<Scalars['String']['input']>;
  adresDL?: InputMaybe<Scalars['String']['input']>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  chassis?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  commentSubject?: InputMaybe<Scalars['String']['input']>;
  conditions?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['Boolean']['input']>;
  contract_id?: InputMaybe<Scalars['String']['input']>;
  engine?: InputMaybe<Scalars['String']['input']>;
  graph?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  inStock?: InputMaybe<Scalars['Boolean']['input']>;
  insurance?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  managerId?: InputMaybe<Scalars['String']['input']>;
  pts?: InputMaybe<Scalars['String']['input']>;
  pts_date?: InputMaybe<Scalars['String']['input']>;
  srokPostavki?: InputMaybe<Scalars['String']['input']>;
  srokPostavkiDni?: InputMaybe<Scalars['String']['input']>;
  subjectid?: InputMaybe<Scalars['String']['input']>;
  summ?: InputMaybe<Scalars['String']['input']>;
  tehChar?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  wasInUse?: InputMaybe<Scalars['Boolean']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  endCall?: Maybe<Scalars['JSON']['output']>;
  incomeCall?: Maybe<Scalars['JSON']['output']>;
  leadFormAdded?: Maybe<Scalars['JSON']['output']>;
  newContract?: Maybe<Scalars['JSON']['output']>;
  newNotification?: Maybe<Scalars['Boolean']['output']>;
  taskAdded?: Maybe<Task>;
};


export type SubscriptionEndCallArgs = {
  workphone: Scalars['String']['input'];
};


export type SubscriptionIncomeCallArgs = {
  workphone: Scalars['String']['input'];
};


export type SubscriptionTaskAddedArgs = {
  responsible_user_id: Scalars['ID']['input'];
};

export type SupportRequest = {
  __typename?: 'SupportRequest';
  client_id: Scalars['String']['output'];
  client_name: Scalars['String']['output'];
  company_id?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  created_date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  last_date: Scalars['Date']['output'];
  questions?: Maybe<Array<Maybe<QuestionAndAnswer>>>;
  responsible_ids: Array<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  theme: Theme;
  updated_date: Scalars['Date']['output'];
  uuid?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type TagFilter = {
  q?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  _id: Scalars['ID']['output'];
  complete_till_at?: Maybe<Scalars['Date']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<User>;
  duration?: Maybe<Scalars['String']['output']>;
  element?: Maybe<Scalars['JSON']['output']>;
  element_type?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  is_completed?: Maybe<Scalars['Boolean']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  phone?: Maybe<Scalars['String']['output']>;
  responsible_user?: Maybe<User>;
  task_type?: Maybe<TaskType>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type TaskFilter = {
  company?: InputMaybe<CompanyFilter>;
  complete_till_at?: InputMaybe<PeriodFilter>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  element_id?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
};

export type TaskInput = {
  complete_till_at?: InputMaybe<Scalars['Date']['input']>;
  element_id?: InputMaybe<Scalars['String']['input']>;
  element_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  task_type: TaskType;
  text?: InputMaybe<Scalars['String']['input']>;
};

export enum TaskType {
  Action = 'Action',
  Call = 'Call',
  GetDocs = 'Get_docs',
  Meeting = 'Meeting',
  WriteEmail = 'WriteEmail'
}

export type TgReport = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
};

export type Theme = {
  __typename?: 'Theme';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  prefilledText?: Maybe<Scalars['String']['output']>;
  priority: Scalars['String']['output'];
  responsible_ids: Array<Scalars['ID']['output']>;
};

export type Tour = {
  __typename?: 'Tour';
  block: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  page: Scalars['String']['output'];
  redirect?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text: Scalars['String']['output'];
  viewed: Scalars['Boolean']['output'];
};

export type TourInput = {
  block?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyInput = {
  contact_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsible_user_id?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  abonentId?: Maybe<Scalars['String']['output']>;
  agent?: Maybe<Scalars['Boolean']['output']>;
  banned?: Maybe<Scalars['Boolean']['output']>;
  callHistory?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  courses?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  email: Scalars['String']['output'];
  group?: Maybe<Group>;
  id?: Maybe<Scalars['ID']['output']>;
  isOnline?: Maybe<Scalars['Boolean']['output']>;
  lastActivity?: Maybe<Scalars['Date']['output']>;
  maxId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  ref_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  role: UserRole;
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  settings?: Maybe<Scalars['JSON']['output']>;
  telegramId?: Maybe<Scalars['String']['output']>;
  tester?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tours?: Maybe<Array<Maybe<Tour>>>;
  user_id?: Maybe<Scalars['String']['output']>;
  workphone?: Maybe<Scalars['String']['output']>;
};


export type UserCoursesArgs = {
  filter?: InputMaybe<CourseFilter>;
};

export type UserCourse = {
  __typename?: 'UserCourse';
  _id?: Maybe<Scalars['ID']['output']>;
  completion_date?: Maybe<Scalars['Date']['output']>;
  course?: Maybe<Course>;
  deadline?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  user?: Maybe<User>;
  viewed?: Maybe<Scalars['Boolean']['output']>;
};

export type UserFilter = {
  group_id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

export enum UserRole {
  Admin = 'admin',
  Agent = 'agent',
  Backoffice = 'backoffice',
  Callcenter = 'callcenter',
  Debtcontrol = 'debtcontrol',
  Headmanager = 'headmanager',
  Manager = 'manager',
  Partner = 'partner',
  Sop = 'sop'
}

export type BaseElement = {
  activity?: string | null | undefined;
  address?: string | null | undefined;
  comment1?: string | null | undefined;
  comment2?: string | null | undefined;
  comment3?: string | null | undefined;
  contact?: string | null | undefined;
  email?: string | null | undefined;
  inn: string;
  name: string;
  phone?: string | null | undefined;
  post?: string | null | undefined;
  revenue?: number | null | undefined;
};

export type BaseInput = {
  options: BaseOptionsInput;
  responsible_user_id: string;
  tag: string;
  xlData: Array<BaseElement>;
};

export type BaseOptionsInput = {
  checkMobilePhone: boolean;
  fixInn: boolean;
};

export type CalcInput = {
  agentCom?: number | null | undefined;
  cadastral?: number | null | undefined;
  conditions?: string | null | undefined;
  duration: number;
  graphType?: GraphType | null | undefined;
  id?: string | number | null | undefined;
  leadId?: string | number | null | undefined;
  managerCom?: number | null | undefined;
  name?: string | null | undefined;
  nds?: string | null | undefined;
  prepaid: number;
  price: number;
  propType?: PropertyTypes | null | undefined;
  rate?: number | null | undefined;
  stair?: number | null | undefined;
  strength?: number | null | undefined;
};

export type CompanyFilter = {
  activeTasks?: boolean | null | undefined;
  activityPeriod?: PeriodFilter | null | undefined;
  approved?: boolean | null | undefined;
  delivered?: boolean | null | undefined;
  dept?: boolean | null | undefined;
  dept10?: boolean | null | undefined;
  dept30?: boolean | null | undefined;
  email?: string | null | undefined;
  equipment?: boolean | null | undefined;
  facePunch?: boolean | null | undefined;
  group_id?: Array<string | null | undefined> | null | undefined;
  hasPhone?: boolean | null | undefined;
  holding_id?: string | null | undefined;
  ids?: Array<string | number | null | undefined> | null | undefined;
  inn?: string | null | undefined;
  light?: boolean | null | undefined;
  limit?: boolean | null | undefined;
  name?: string | null | undefined;
  otkazSB?: boolean | null | undefined;
  phone?: string | null | undefined;
  q?: string | null | undefined;
  rating?: Array<string | null | undefined> | null | undefined;
  responsible_user_id?: string | null | undefined;
  signed?: boolean | null | undefined;
  special?: boolean | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
  types?: Array<string | null | undefined> | null | undefined;
  workSB?: boolean | null | undefined;
  workUO?: boolean | null | undefined;
};

export type CompanyInput = {
  email?: string | null | undefined;
  group_id?: string | null | undefined;
  inn?: string | null | undefined;
  name?: string | null | undefined;
  phone?: Array<string | null | undefined> | null | undefined;
  responsible_user_id: string;
  tags?: Array<string | number | null | undefined> | null | undefined;
  type?: string | null | undefined;
  types?: Array<string | null | undefined> | null | undefined;
};

export type ContactFilter = {
  email?: string | null | undefined;
  group_id?: Array<string | null | undefined> | null | undefined;
  ids?: Array<string | number | null | undefined> | null | undefined;
  name?: string | null | undefined;
  phone?: string | null | undefined;
  q?: string | null | undefined;
  responsible_user_id?: string | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
};

export type ContactInput = {
  birthday?: unknown;
  call_source?: string | null | undefined;
  city?: string | null | undefined;
  company_id?: string | null | undefined;
  company_ids?: Array<string | number | null | undefined> | null | undefined;
  email?: string | null | undefined;
  group_id?: string | null | undefined;
  id?: string | number | null | undefined;
  name?: string | null | undefined;
  phone?: Array<string | null | undefined> | null | undefined;
  post?: string | null | undefined;
  responsible_user_id?: string | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
};

export type ContractFilter = {
  advance?: boolean | null | undefined;
  callCenter?: boolean | null | undefined;
  company_id?: string | null | undefined;
  group_id?: string | null | undefined;
  internet?: boolean | null | undefined;
  manager_id?: string | null | undefined;
  partner_id?: string | number | null | undefined;
  q?: string | null | undefined;
  signed?: boolean | null | undefined;
  status?: string | null | undefined;
  status_date?: PeriodFilter | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
  unloaded?: boolean | null | undefined;
};

export type CourseFilter = {
  empty?: boolean | null | undefined;
  status?: string | null | undefined;
};

export type CourseInput = {
  description?: string | null | undefined;
  id?: string | number | null | undefined;
  link: string;
  title: string;
};

export type DirectoryFilter = {
  additional_phone?: string | null | undefined;
  address?: string | null | undefined;
  birthday?: unknown;
  department?: Array<string | null | undefined> | null | undefined;
  description?: string | null | undefined;
  email?: string | null | undefined;
  name?: Array<string | null | undefined> | null | undefined;
  personal_phone?: string | null | undefined;
  post?: string | null | undefined;
  q?: string | null | undefined;
  status?: string | null | undefined;
  subdivision?: Array<string | null | undefined> | null | undefined;
  workphone?: string | null | undefined;
};

export type DirectoryInput = {
  additional_phone?: string | null | undefined;
  address?: string | null | undefined;
  birthday?: unknown;
  department?: string | null | undefined;
  description?: string | null | undefined;
  email?: string | null | undefined;
  id?: string | null | undefined;
  isOnline?: boolean | null | undefined;
  lastActivity?: unknown;
  name?: string | null | undefined;
  personal_phone?: string | null | undefined;
  post?: string | null | undefined;
  q?: string | null | undefined;
  status?: string | null | undefined;
  subdivision?: string | null | undefined;
  user_id?: string | null | undefined;
  workphone?: string | null | undefined;
};

export type EdoOperator =
  | 'diadoc'
  | 'sbis';

export type EdoRouteInput = {
  contract_id: string | number;
  creator_id: string | number;
  responsible_id: string | number;
};

export type EdoWaypointFileInput = {
  document_id: string;
  document_view: string;
  entity_id?: string | null | undefined;
  fileext: string;
  filename: string;
  message_id?: string | null | undefined;
  status?: string | null | undefined;
};

export type EdoWaypointInput = {
  documents?: Array<string | number | null | undefined> | null | undefined;
  from_inn?: string | null | undefined;
  from_name?: string | null | undefined;
  operator: EdoOperator;
  pack?: boolean | null | undefined;
  route_id: string | number;
  status?: string | null | undefined;
  to_inn: string;
  to_kpp?: string | null | undefined;
  to_name: string;
};

export type EsignatureInput = {
  birthday: unknown;
  birthplace: string;
  company_inn: string;
  company_type?: string | null | undefined;
  name: string;
  passport: string;
  passport_code: string;
  passport_date?: string | null | undefined;
  passport_place: string;
  sms_date: unknown;
  sms_key: string;
  sms_phone: string;
  user_address: string;
  user_inn: string;
  user_ip?: string | null | undefined;
  user_phone: string;
};

export type EventInput = {
  files?: Array<string | null | undefined> | null | undefined;
  id?: string | number | null | undefined;
  images?: Array<string | null | undefined> | null | undefined;
  role?: EventRole | null | undefined;
  subtitle?: string | null | undefined;
  text?: string | null | undefined;
  title?: string | null | undefined;
  type?: string | null | undefined;
};

export type EventRole =
  | 'all'
  | 'manager'
  | 'partner';

export type FullCalcInput = {
  agent?: unknown;
  agentCom?: string | null | undefined;
  balanceholder?: string | null | undefined;
  comment?: string | null | undefined;
  company?: unknown;
  currency?: string | null | undefined;
  dueDate?: string | null | undefined;
  duration?: string | null | undefined;
  financeAmount?: string | null | undefined;
  graphType?: string | null | undefined;
  hasPhasedFunding?: boolean | null | undefined;
  id?: string | null | undefined;
  inStock?: boolean | null | undefined;
  individualGraph?: Array<unknown> | null | undefined;
  inputPrice?: string | null | undefined;
  isCalculation?: boolean | null | undefined;
  leadId?: string | number | null | undefined;
  managerCom?: string | null | undefined;
  name?: string | null | undefined;
  nds?: string | null | undefined;
  phasedFunding?: Array<PhasedFundingItemInput | null | undefined> | null | undefined;
  prepaid?: string | null | undefined;
  prepaidDate?: string | null | undefined;
  prepaidProc?: string | null | undefined;
  price?: string | null | undefined;
  propType?: string | null | undefined;
  provider?: unknown;
  rate?: string | null | undefined;
  stair?: string | null | undefined;
  strength?: string | null | undefined;
  subjectData?: SubjectData | null | undefined;
  wasInUse?: boolean | null | undefined;
};

export type FullCalcUpdateInput = {
  agent?: unknown;
  agentCom?: string | null | undefined;
  balanceholder?: string | null | undefined;
  comment?: string | null | undefined;
  company?: unknown;
  currency?: string | null | undefined;
  dueDate?: string | null | undefined;
  duration?: string | null | undefined;
  exceptions?: Array<unknown> | null | undefined;
  financeAmount?: string | null | undefined;
  graphType?: string | null | undefined;
  hasPhasedFunding?: boolean | null | undefined;
  id?: string | null | undefined;
  inStock?: boolean | null | undefined;
  individualGraph?: Array<unknown> | null | undefined;
  inputPrice?: string | null | undefined;
  isCalculation?: boolean | null | undefined;
  managerCom?: string | null | undefined;
  name?: string | null | undefined;
  nds?: string | null | undefined;
  phasedFunding?: Array<PhasedFundingItemInput | null | undefined> | null | undefined;
  prepaid?: string | null | undefined;
  prepaidDate?: string | null | undefined;
  prepaidProc?: string | null | undefined;
  price?: string | null | undefined;
  propType?: string | null | undefined;
  provider?: unknown;
  rate?: string | null | undefined;
  stair?: string | null | undefined;
  strength?: string | null | undefined;
  subjectData?: SubjectUpdateData | null | undefined;
  wasInUse?: boolean | null | undefined;
};

export type GraphType =
  | 'annuity'
  | 'annuityStair'
  | 'drawdown';

export type HoldingBindInput = {
  company_id: string | number;
  holding_id: string | number;
};

export type HoldingCreateInput = {
  companies_id: Array<string | number | null | undefined>;
  description: string;
  name: string;
};

export type HoldingDeleteInput = {
  id: string | number;
};

export type HoldingFilter = {
  creator_id?: string | number | null | undefined;
  name?: string | null | undefined;
};

export type HoldingUnbindInput = {
  company_id: string | number;
};

export type HoldingUpdateInput = {
  companies_id?: Array<string | number | null | undefined> | null | undefined;
  description?: string | null | undefined;
  name?: string | null | undefined;
};

export type InputSettings = {
  email_edoNotification?: boolean | null | undefined;
  email_report?: boolean | null | undefined;
  email_statusLeads?: boolean | null | undefined;
  email_tasks?: boolean | null | undefined;
  lazy_load?: boolean | null | undefined;
  max_contactBirthdayNotification?: boolean | null | undefined;
  max_edoNotification?: boolean | null | undefined;
  max_report?: boolean | null | undefined;
  max_spec_leads?: boolean | null | undefined;
  max_statusLeads?: boolean | null | undefined;
  max_tasks?: boolean | null | undefined;
  tg_contactBirthdayNotification?: boolean | null | undefined;
  tg_edoNotification?: boolean | null | undefined;
  tg_report?: TgReport | null | undefined;
  tg_spec_leads?: boolean | null | undefined;
  tg_statusLeads?: boolean | null | undefined;
  tg_tasks?: boolean | null | undefined;
};

export type KanbanLeadsFilter = {
  callCenter?: boolean | null | undefined;
  createdAt?: PeriodFilter | null | undefined;
  created_by?: string | null | undefined;
  created_by_group_id?: string | null | undefined;
  form?: boolean | null | undefined;
  group_id?: Array<string | null | undefined> | null | undefined;
  hasContracts?: boolean | null | undefined;
  hasProject?: boolean | null | undefined;
  ids?: Array<string | number | null | undefined> | null | undefined;
  internet?: boolean | null | undefined;
  not_statuses?: Array<LeadStatus | null | undefined> | null | undefined;
  q?: string | null | undefined;
  responsible_user_id?: string | null | undefined;
  roistat?: Array<string | null | undefined> | null | undefined;
  status?: LeadStatus | null | undefined;
  statuses?: Array<LeadStatus | null | undefined> | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
  updatedAt?: PeriodFilter | null | undefined;
};

export type KanbanLeadsStatusGlobalPaginationInput = {
  limit: number;
  skip: number;
};

export type KanbanLeadsStatusPaginationInput = {
  limit: number;
  skip: number;
  statusName: LeadStatus;
};

export type LeadFilter = {
  callCenter?: boolean | null | undefined;
  createdAt?: PeriodFilter | null | undefined;
  created_by?: string | null | undefined;
  created_by_group_id?: string | null | undefined;
  form?: boolean | null | undefined;
  group_id?: Array<string | null | undefined> | null | undefined;
  hasContracts?: boolean | null | undefined;
  hasProject?: boolean | null | undefined;
  hasStatusLog?: boolean | null | undefined;
  ids?: Array<string | number | null | undefined> | null | undefined;
  internet?: boolean | null | undefined;
  not_created_by?: string | null | undefined;
  not_responsible_user_id?: string | null | undefined;
  not_statuses?: Array<LeadStatus | null | undefined> | null | undefined;
  q?: string | null | undefined;
  responsible_user_id?: string | null | undefined;
  roistat?: Array<string | null | undefined> | null | undefined;
  status?: LeadStatus | null | undefined;
  statuses?: Array<LeadStatus | null | undefined> | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
  updatedAt?: PeriodFilter | null | undefined;
};

export type LeadInput = {
  closed?: string | null | undefined;
  company_id?: string | null | undefined;
  created_by?: string | null | undefined;
  group_id?: string | null | undefined;
  id?: string | number | null | undefined;
  name?: string | null | undefined;
  responsible_user_id?: string | null | undefined;
  roistat?: string | null | undefined;
  status?: LeadStatus | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
  user_data?: unknown;
};

export type LeadStatus =
  | 'active'
  | 'ad'
  | 'approved'
  | 'atWork'
  | 'atWorkCallcenter'
  | 'atWorkManager'
  | 'closed'
  | 'closedCallcenter'
  | 'created'
  | 'decision'
  | 'dl'
  | 'documents'
  | 'first'
  | 'meeting'
  | 'spam'
  | 'transferredCallcenter'
  | 'transferredToManager';

export type MailMessagesFilter = {
  client: string;
};

export type MailType =
  | 'receive'
  | 'send';

export type MemoFilter = {
  period?: Array<string | null | undefined> | null | undefined;
  sortDate?: string | null | undefined;
  status?: string | null | undefined;
};

export type NoteInput = {
  element_id?: string | null | undefined;
  element_type?: string | null | undefined;
  id?: string | number | null | undefined;
  is_editable?: boolean | null | undefined;
  note_type?: NoteType | null | undefined;
  text?: string | null | undefined;
};

export type NoteType =
  | 'Call_in'
  | 'Call_out'
  | 'Common'
  | 'Service';

export type PartnerFilter = {
  ids?: Array<string | number | null | undefined> | null | undefined;
  q?: string | null | undefined;
};

export type PeriodFilter = {
  end?: unknown;
  start?: unknown;
};

export type PhasedFundingItemInput = {
  date?: unknown;
  inn?: string | null | undefined;
  n?: string | null | undefined;
  name?: string | null | undefined;
  rate?: string | null | undefined;
  realName?: string | null | undefined;
  share?: string | null | undefined;
  sum?: string | null | undefined;
};

export type ProjectFilter = {
  group_id?: Array<string | null | undefined> | null | undefined;
  ids?: Array<string | number | null | undefined> | null | undefined;
  partner_id?: string | number | null | undefined;
  q?: string | null | undefined;
  status?: string | null | undefined;
};

export type PropertyTypes =
  | 'commercial'
  | 'equipment'
  | 'light'
  | 'lightcommercial'
  | 'realEstate'
  | 'residentialEstate'
  | 'special';

export type SubjectData = {
  adresDKP?: string | null | undefined;
  adresDL?: string | null | undefined;
  body?: string | null | undefined;
  chassis?: string | null | undefined;
  colour?: string | null | undefined;
  commentSubject?: string | null | undefined;
  conditions?: string | null | undefined;
  engine?: string | null | undefined;
  inStock?: boolean | null | undefined;
  pts?: string | null | undefined;
  pts_date?: string | null | undefined;
  srokPostavki?: string | null | undefined;
  srokPostavkiDni?: string | null | undefined;
  tehChar?: string | null | undefined;
  vin?: string | null | undefined;
  wasInUse?: boolean | null | undefined;
  year?: string | null | undefined;
};

export type SubjectUpdateData = {
  adresDKP?: string | null | undefined;
  adresDL?: string | null | undefined;
  approved?: boolean | null | undefined;
  body?: string | null | undefined;
  chassis?: string | null | undefined;
  colour?: string | null | undefined;
  comment?: string | null | undefined;
  commentSubject?: string | null | undefined;
  conditions?: string | null | undefined;
  contract?: boolean | null | undefined;
  contract_id?: string | null | undefined;
  engine?: string | null | undefined;
  graph?: Array<unknown> | null | undefined;
  inStock?: boolean | null | undefined;
  insurance?: Array<string | null | undefined> | null | undefined;
  managerId?: string | null | undefined;
  pts?: string | null | undefined;
  pts_date?: string | null | undefined;
  srokPostavki?: string | null | undefined;
  srokPostavkiDni?: string | null | undefined;
  subjectid?: string | null | undefined;
  summ?: string | null | undefined;
  tehChar?: string | null | undefined;
  vin?: string | null | undefined;
  wasInUse?: boolean | null | undefined;
  year?: string | null | undefined;
};

export type TagFilter = {
  q?: string | null | undefined;
};

export type TaskFilter = {
  company?: CompanyFilter | null | undefined;
  complete_till_at?: PeriodFilter | null | undefined;
  created_by?: string | null | undefined;
  element_id?: string | null | undefined;
  group_id?: Array<string | null | undefined> | null | undefined;
  ids?: Array<string | number | null | undefined> | null | undefined;
  is_completed?: boolean | null | undefined;
  q?: string | null | undefined;
  responsible_user_id?: string | null | undefined;
};

export type TaskInput = {
  complete_till_at?: unknown;
  element_id?: string | null | undefined;
  element_type?: string | null | undefined;
  id?: string | number | null | undefined;
  is_completed?: boolean | null | undefined;
  responsible_user_id?: string | null | undefined;
  task_type: TaskType;
  text?: string | null | undefined;
};

export type TaskType =
  | 'Action'
  | 'Call'
  | 'Get_docs'
  | 'Meeting'
  | 'WriteEmail';

export type TgReport = {
  checked?: boolean | null | undefined;
  filter?: unknown;
  period?: string | null | undefined;
};

export type TourInput = {
  block?: string | null | undefined;
  id?: string | number | null | undefined;
  name?: string | null | undefined;
  order?: number | null | undefined;
  page?: string | null | undefined;
  redirect?: string | null | undefined;
  role?: Array<string | null | undefined> | null | undefined;
  text?: string | null | undefined;
};

export type UpdateCompanyInput = {
  contact_ids?: Array<string | number | null | undefined> | null | undefined;
  email?: string | null | undefined;
  group_id?: string | null | undefined;
  id?: string | number | null | undefined;
  inn?: string | null | undefined;
  name?: string | null | undefined;
  phone?: Array<string | null | undefined> | null | undefined;
  responsible_user_id?: string | null | undefined;
  tags?: Array<string | number | null | undefined> | null | undefined;
  types?: Array<string | null | undefined> | null | undefined;
};

export type UserFilter = {
  group_id?: string | null | undefined;
  ids?: Array<string | number | null | undefined> | null | undefined;
  q?: string | null | undefined;
  role?: UserRole | null | undefined;
};

export type UserRole =
  | 'admin'
  | 'agent'
  | 'backoffice'
  | 'callcenter'
  | 'debtcontrol'
  | 'headmanager'
  | 'manager'
  | 'partner'
  | 'sop';

export type ActivateUserMutationVariables = Exact<{
  authToken: string;
  password: string;
}>;


export type ActivateUserMutation = { userAuthPass: string | null };

export type AddApplyLeadMutationVariables = Exact<{
  input: LeadInput;
  esignatureInput: EsignatureInput;
}>;


export type AddApplyLeadMutation = { addApplyLead: { _id: string } | null, addEsignature: { id: string | null } | null };

export type AddApplyNoteMutationVariables = Exact<{
  input: NoteInput;
  esignatureInput: NoteInput;
}>;


export type AddApplyNoteMutation = { esignature: { text: string | null, is_editable: boolean | null, note_type: string | null, element_type: string | null, element: unknown } | null, infoFromClient: { text: string | null, is_editable: boolean | null, note_type: string | null, element_type: string | null, element: unknown } | null };

export type AddCalcMutationVariables = Exact<{
  input: CalcInput;
}>;


export type AddCalcMutation = { addCalc: unknown };

export type AddCompanyMutationVariables = Exact<{
  input: CompanyInput;
}>;


export type AddCompanyMutation = { addCompany: { _id: string | null } | null };

export type AddContactMutationVariables = Exact<{
  input: ContactInput;
}>;


export type AddContactMutation = { addContact: { _id: string | null } | null };

export type AddDirectoryMutationVariables = Exact<{
  input: DirectoryInput;
}>;


export type AddDirectoryMutation = { addDirectory: { id: string, name: string, birthday: unknown, post: string, workphone: string | null, personal_phone: string | null, additional_phone: string | null, email: string | null, address: string | null, department: string, subdivision: string, status: string | null, description: string | null, user_id: string | null } | null };

export type AddEsignatureMutationVariables = Exact<{
  input: EsignatureInput;
}>;


export type AddEsignatureMutation = { addEsignature: { id: string | null, name: string | null, birthday: unknown, birthplace: string | null, user_address: string | null, user_inn: string | null, passport: string | null, passport_date: string | null, passport_place: string | null, passport_code: string | null, user_phone: string | null, company_inn: string | null, sms_key: string | null, sms_phone: string | null, sms_date: unknown, user_ip: string | null, esignature_id: string | null } | null };

export type AddEventMutationVariables = Exact<{
  input: EventInput;
}>;


export type AddEventMutation = { addEvent: { id: string | null, title: string | null, subtitle: string | null, text: string | null, type: string | null, role: string | null, images: Array<string | null> | null, createdAt: unknown, updatedAt: unknown } | null };

export type AddFaqMutationVariables = Exact<{
  theme: string;
  question: string;
  answer: string;
  pay?: string | null | undefined;
}>;


export type AddFaqMutation = { addFaqPopular: { id: string, theme: string, question: string, answer: string, pay: string | null } | null };

export type AddFullCalcMutationVariables = Exact<{
  input: FullCalcInput;
}>;


export type AddFullCalcMutation = { addFullCalc: unknown };

export type AddGuarantorMutationVariables = Exact<{
  inn: string;
  project_id: string;
}>;


export type AddGuarantorMutation = { addGuarantor: unknown };

export type AddLeadMutationVariables = Exact<{
  input: LeadInput;
}>;


export type AddLeadMutation = { addLead: { _id: string } | null };

export type AddMessageTemplateMutationVariables = Exact<{
  title: string;
  message: string;
  responsible_id: string;
  type: string;
}>;


export type AddMessageTemplateMutation = { addMessageTemplate: { id: string, title: string, message: string, responsible_id: string, type: string } | null };

export type AddNoteMutationVariables = Exact<{
  input: NoteInput;
}>;


export type AddNoteMutation = { addNote: { _id: string, text: string | null, element: unknown, element_type: string | null, createdAt: unknown, responsible_user: { _id: string | null, name: string | null } | null } | null };

export type AddQuestionAndAnswerMutationVariables = Exact<{
  support_request_id: string | number;
  question_files?: Array<string | null | undefined> | string | null | undefined;
  question: string;
}>;


export type AddQuestionAndAnswerMutation = { addQuestionAndAnswer: { id: string, question: string, question_files: Array<unknown> | null, answer: string | null, answer_files: Array<unknown> | null, created_date: unknown, updated_date: unknown, support_request: { id: string } } | null };

export type AddSupportRequestMutationVariables = Exact<{
  theme_id: string | number;
  question: string;
  question_files?: Array<string | null | undefined> | string | null | undefined;
}>;


export type AddSupportRequestMutation = { addSupportRequest: Array<{ id: string } | null> | null };

export type AddTaskMutationVariables = Exact<{
  input: TaskInput;
}>;


export type AddTaskMutation = { addTask: { _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null } | null } | null };

export type AddTasksMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
  input: TaskInput;
}>;


export type AddTasksMutation = { addTasks: { text: string | null } | null };

export type AddTourMutationVariables = Exact<{
  input: TourInput;
}>;


export type AddTourMutation = { addTour: { id: string } | null };

export type AuthKeyGenerateMutationVariables = Exact<{
  email: string;
}>;


export type AuthKeyGenerateMutation = { authKeyGenerate: boolean | null };

export type BindCalcMutationVariables = Exact<{
  calcId: string;
  leadId: string;
}>;


export type BindCalcMutation = { bindCalc: boolean | null };

export type BindHoldingMutationVariables = Exact<{
  input: HoldingBindInput;
}>;


export type BindHoldingMutation = { bindHolding: { id: string, name: string | null } | null };

export type ChangeProjectParamsMutationVariables = Exact<{
  id?: string | number | null | undefined;
  projectId: string;
  data: unknown;
}>;


export type ChangeProjectParamsMutation = { changeProjectParams: unknown };

export type CloseSbisMessageMutationVariables = Exact<{
  id: string;
}>;


export type CloseSbisMessageMutation = { closeSbisMessage: unknown };

export type CreateActDeliverMutationVariables = Exact<{
  id: string;
  contractId: string;
}>;


export type CreateActDeliverMutation = { createActDeliver: unknown };

export type CreateBeaconMutationVariables = Exact<{
  dateOfIssue: string;
  installationDate: string;
  kit: string;
  managerPhone: string;
  providerAddress: string;
  providerContact: string;
  contract_id: string;
}>;


export type CreateBeaconMutation = { createBeacon: unknown };

export type CreateContractMutationVariables = Exact<{
  calcId: string;
  leadId: string;
  payer: string;
  insurance: string;
  contractType: string;
}>;


export type CreateContractMutation = { createContract: { id: string } | null };

export type CreateCourseMutationVariables = Exact<{
  input: CourseInput;
}>;


export type CreateCourseMutation = { createCourse: { id: string | null } | null };

export type CreateEdoRouteMutationVariables = Exact<{
  edoRoute: EdoRouteInput;
}>;


export type CreateEdoRouteMutation = { createEdoRoute: { id: string | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown, creator: { id: string | null, name: string | null } | null, responsible: { id: string | null, name: string | null } | null, contract: { id: string, name: string } | null, waypoints: Array<{ id: string | null, to_name: string | null, to_inn: string | null, to_kpp: string | null, from_name: string | null, from_inn: string | null, operator: EdoOperator | null, status: string | null, pack: boolean | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown, route: { id: string | null } | null, documents: Array<{ id: string | null, document_id: string | null, document_view: string | null, message_id: string | null, entity_id: string | null, status: string | null, filename: string | null, fileext: string | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown } | null> | null } | null> | null } | null };

export type CreateEdoWaypointMutationVariables = Exact<{
  edoWaypoint: EdoWaypointInput;
}>;


export type CreateEdoWaypointMutation = { createEdoWaypoint: { id: string | null, to_name: string | null, to_inn: string | null, to_kpp: string | null, from_name: string | null, from_inn: string | null, operator: EdoOperator | null, status: string | null, pack: boolean | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown, route: { id: string | null, creator: { id: string | null, name: string | null } | null, responsible: { id: string | null, name: string | null } | null, contract: { id: string } | null } | null, documents: Array<{ id: string | null, document_id: string | null, document_view: string | null, message_id: string | null, entity_id: string | null, status: string | null, filename: string | null, fileext: string | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown } | null> | null } | null };

export type CreateEdoWaypointFilesMutationVariables = Exact<{
  edoWaypointFiles: Array<EdoWaypointFileInput> | EdoWaypointFileInput;
}>;


export type CreateEdoWaypointFilesMutation = { createEdoWaypointFiles: Array<{ id: string | null, document_id: string | null, document_view: string | null, message_id: string | null, entity_id: string | null, status: string | null, filename: string | null, fileext: string | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown } | null> | null };

export type CreateHoldingMutationVariables = Exact<{
  input: HoldingCreateInput;
}>;


export type CreateHoldingMutation = { createHolding: { id: string | null, name: string | null, description: string | null, creator: { id: string | null, name: string | null } | null, companies: Array<{ id: string, name: string | null, inn: string | null } | null> | null } | null };

export type CreateMemoMutationVariables = Exact<{
  input: unknown;
}>;


export type CreateMemoMutation = { createMemo: unknown };

export type CreateProjectMutationVariables = Exact<{
  id: string;
  product?: string | null | undefined;
  origin?: string | null | undefined;
  comment?: string | null | undefined;
  sop_id?: string | null | undefined;
}>;


export type CreateProjectMutation = { createProject: { _id: string } | null };

export type DeleteCompaniesMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
}>;


export type DeleteCompaniesMutation = { deleteCompanies: boolean | null };

export type DeleteContactsMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
}>;


export type DeleteContactsMutation = { deleteContacts: boolean | null };

export type DeleteDirectoryMutationVariables = Exact<{
  id?: string | null | undefined;
}>;


export type DeleteDirectoryMutation = { deleteDirectory: { id: string, name: string, birthday: unknown, post: string, workphone: string | null, personal_phone: string | null, additional_phone: string | null, email: string | null, address: string | null, department: string, subdivision: string, status: string | null, description: string | null } | null };

export type DeleteEventMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteEventMutation = { deleteEvent: { id: string | null, title: string | null, subtitle: string | null, text: string | null, type: string | null, role: string | null, images: Array<string | null> | null, createdAt: unknown, updatedAt: unknown } | null };

export type DeleteFaqMutationVariables = Exact<{
  theme?: string | null | undefined;
  questionId?: string | null | undefined;
}>;


export type DeleteFaqMutation = { deleteFaqPopular: unknown };

export type DeleteHoldingMutationVariables = Exact<{
  input: HoldingDeleteInput;
}>;


export type DeleteHoldingMutation = { deleteHolding: { id: string | null, name: string | null, creator: { id: string | null, name: string | null } | null } | null };

export type DeleteLeadsMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
}>;


export type DeleteLeadsMutation = { deleteLeads: boolean | null };

export type DeleteMessageTemplateMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteMessageTemplateMutation = { deleteMessageTemplate: { id: string, title: string, message: string, responsible_id: string, type: string } | null };

export type DeleteNoteMutationVariables = Exact<{
  id: string;
}>;


export type DeleteNoteMutation = { deleteNote: { _id: string } | null };

export type DeleteTaskMutationVariables = Exact<{
  id: string;
}>;


export type DeleteTaskMutation = { deleteTask: { _id: string } | null };

export type DeleteTasksMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
}>;


export type DeleteTasksMutation = { deleteTasks: boolean | null };

export type DeleteTourMutationVariables = Exact<{
  id: string;
}>;


export type DeleteTourMutation = { deleteTour: { id: string } | null };

export type GetActSverkiMutationVariables = Exact<{
  partnerId: string;
  contractId?: string | null | undefined;
  period?: PeriodFilter | null | undefined;
}>;


export type GetActSverkiMutation = { getActSverki: string };

export type HideContactMutationVariables = Exact<{
  id: string | number;
  company_id?: string | number | null | undefined;
}>;


export type HideContactMutation = { hideContact: { id: string, name: string | null, hidden: boolean | null } | null };

export type LoginUserMutationVariables = Exact<{
  email: string;
  password: string;
  key?: string | null | undefined;
}>;


export type LoginUserMutation = { loginUser: string };

export type MakeCallMutationVariables = Exact<{
  phone: string;
}>;


export type MakeCallMutation = { makeCall: boolean | null };

export type MaxActivationMutationVariables = Exact<{
  token: string;
}>;


export type MaxActivationMutation = { maxActivation: boolean | null };

export type OtherLeasingMutationVariables = Exact<{
  list: Array<unknown> | unknown;
  inn: string;
}>;


export type OtherLeasingMutation = { otherLeasing: boolean | null };

export type PickUpCompanyMutationVariables = Exact<{
  id: string | number;
}>;


export type PickUpCompanyMutation = { pickUpCompany: boolean | null };

export type PinNoteMutationVariables = Exact<{
  id: string | number;
}>;


export type PinNoteMutation = { pinNote: { _id: string, text: string | null, element: unknown, element_type: string | null, createdAt: unknown, responsible_user: { _id: string | null, name: string | null } | null } | null };

export type RegPartnerMutationVariables = Exact<{
  inn: string;
}>;


export type RegPartnerMutation = { regPartner: boolean | null };

export type RegSmsPartnerMutationVariables = Exact<{
  inn: string;
  phone: string;
  email: string;
}>;


export type RegSmsPartnerMutation = { regSmsPartner: boolean | null };

export type ResendMailMutationVariables = Exact<{
  email?: string | null | undefined;
}>;


export type ResendMailMutation = { resendMail: boolean | null };

export type SetCourseMutationVariables = Exact<{
  userIds: Array<string> | string;
  deadline: unknown;
  courseId: string;
}>;


export type SetCourseMutation = { setCourse: Array<unknown> | null };

export type SetTesterMutationVariables = Exact<{
  value: boolean;
}>;


export type SetTesterMutation = { setTester: boolean | null };

export type StartProjectMutationVariables = Exact<{
  id: string;
}>;


export type StartProjectMutation = { startProject: unknown };

export type TgActivationMutationVariables = Exact<{
  token: string;
}>;


export type TgActivationMutation = { tgActivation: boolean | null };

export type UnbindHoldingMutationVariables = Exact<{
  input: HoldingUnbindInput;
}>;


export type UnbindHoldingMutation = { unbindHolding: { id: string, name: string | null } | null };

export type UnpinCourseMutationVariables = Exact<{
  user_ids: Array<string> | string;
  course_id: string;
}>;


export type UnpinCourseMutation = { unpinCourse: unknown };

export type UnpinGuarantorMutationVariables = Exact<{
  inn: string;
  project_id: string;
}>;


export type UnpinGuarantorMutation = { unpinGuarantor: unknown };

export type UnpinNoteMutationVariables = Exact<{
  id: string | number;
}>;


export type UnpinNoteMutation = { unpinNote: { _id: string, text: string | null, element: unknown, element_type: string | null, createdAt: unknown, responsible_user: { _id: string | null, name: string | null } | null } | null };

export type UpdateCalcMutationVariables = Exact<{
  input: CalcInput;
}>;


export type UpdateCalcMutation = { updateCalc: unknown };

export type UpdateCalcServicesMutationVariables = Exact<{
  calcId: string;
  input: Array<unknown> | unknown;
}>;


export type UpdateCalcServicesMutation = { updateCalcServices: Array<unknown> | null };

export type UpdateCompaniesMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
  responsible_user_id?: string | null | undefined;
}>;


export type UpdateCompaniesMutation = { updateCompanies: boolean | null };

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = { updateCompany: { _id: string | null } | null };

export type UpdateContactMutationVariables = Exact<{
  input: ContactInput;
}>;


export type UpdateContactMutation = { updateContact: { _id: string | null } | null };

export type UpdateContactsMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
  responsible_user_id?: string | null | undefined;
}>;


export type UpdateContactsMutation = { updateContacts: boolean | null };

export type UpdateDirectoriesMutationVariables = Exact<{
  input?: Array<DirectoryInput | null | undefined> | DirectoryInput | null | undefined;
}>;


export type UpdateDirectoriesMutation = { updateDirectories: Array<{ id: string, name: string, birthday: unknown, post: string, workphone: string | null, personal_phone: string | null, additional_phone: string | null, email: string | null, address: string | null, department: string, subdivision: string, status: string | null, description: string | null } | null> | null };

export type UpdateEventMutationVariables = Exact<{
  input: EventInput;
}>;


export type UpdateEventMutation = { updateEvent: { id: string | null, title: string | null, subtitle: string | null, text: string | null, type: string | null, role: string | null, images: Array<string | null> | null, createdAt: unknown, updatedAt: unknown } | null };

export type UpdateFaqPopularMutationVariables = Exact<{
  id?: string | number | null | undefined;
  oldTheme?: string | null | undefined;
  theme?: string | null | undefined;
  question?: string | null | undefined;
  answer?: string | null | undefined;
  pay?: string | null | undefined;
}>;


export type UpdateFaqPopularMutation = { updateFaqPopular: unknown };

export type UpdateFullCalcMutationVariables = Exact<{
  input: FullCalcUpdateInput;
}>;


export type UpdateFullCalcMutation = { updateFullCalc: unknown };

export type UpdateHoldingMutationVariables = Exact<{
  id: string | number;
  input: HoldingUpdateInput;
}>;


export type UpdateHoldingMutation = { updateHolding: { id: string | null, name: string | null, description: string | null, creator: { id: string | null, name: string | null } | null, companies: Array<{ id: string, name: string | null, inn: string | null } | null> | null } | null };

export type UpdateLeadMutationVariables = Exact<{
  input: LeadInput;
}>;


export type UpdateLeadMutation = { updateLead: { _id: string } | null };

export type UpdateLeadsMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
  responsible_user_id?: string | null | undefined;
  status?: LeadStatus | null | undefined;
}>;


export type UpdateLeadsMutation = { updateLeads: boolean | null };

export type UpdateMessageTemplateMutationVariables = Exact<{
  id: string | number;
  title?: string | null | undefined;
  message?: string | null | undefined;
}>;


export type UpdateMessageTemplateMutation = { updateMessageTemplate: { id: string, title: string, message: string, responsible_id: string, type: string } | null };

export type UpdateNoteMutationVariables = Exact<{
  input: NoteInput;
}>;


export type UpdateNoteMutation = { updateNote: { _id: string, text: string | null, element: unknown, element_type: string | null, createdAt: unknown, responsible_user: { _id: string | null, name: string | null } | null } | null };

export type UpdatePartnerLimitMutationVariables = Exact<{
  inn: string;
}>;


export type UpdatePartnerLimitMutation = { updatePartnerLimit: boolean | null };

export type UpdateProjectMutationVariables = Exact<{
  objectType: string;
  objectId: string | number;
  input: unknown;
}>;


export type UpdateProjectMutation = { updateProject: unknown };

export type UpdateQuestionAndAnswerMutationVariables = Exact<{
  id: string | number;
  answer: string;
  answer_files?: Array<string | null | undefined> | string | null | undefined;
}>;


export type UpdateQuestionAndAnswerMutation = { updateQuestionAndAnswer: { id: string, question: string, answer: string | null, answer_files: Array<unknown> | null } | null };

export type UpdateRatingMutationVariables = Exact<{
  inn: string;
}>;


export type UpdateRatingMutation = { updateRating: boolean | null };

export type UpdateSettingsMutationVariables = Exact<{
  settings: InputSettings;
}>;


export type UpdateSettingsMutation = { updateSettings: { id: string | null, settings: unknown } | null };

export type UpdateSignersMutationVariables = Exact<{
  signers: unknown;
  contract_id: string;
}>;


export type UpdateSignersMutation = { updateSigners: unknown };

export type UpdateSupportRequestMutationVariables = Exact<{
  id: string | number;
}>;


export type UpdateSupportRequestMutation = { changeStatusSupportRequest: unknown };

export type UpdateTaskMutationVariables = Exact<{
  input: TaskInput;
}>;


export type UpdateTaskMutation = { updateTask: { _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null } | null } | null };

export type UpdateTasksMutationVariables = Exact<{
  ids?: Array<string> | string | null | undefined;
  is_completed?: boolean | null | undefined;
  complete_till_at?: unknown;
  responsible_user_id?: string | null | undefined;
}>;


export type UpdateTasksMutation = { updateTasks: boolean | null };

export type UpdateTourMutationVariables = Exact<{
  input: TourInput;
}>;


export type UpdateTourMutation = { updateTour: { id: string } | null };

export type UpdateToursMutationVariables = Exact<{
  input: Array<TourInput | null | undefined> | TourInput;
}>;


export type UpdateToursMutation = { updateTours: Array<{ id: string } | null> | null };

export type UpdateUserMutationVariables = Exact<{
  id: string | number;
  phone?: string | null | undefined;
  workphone?: string | null | undefined;
  telegramId?: string | null | undefined;
  maxId?: string | null | undefined;
}>;


export type UpdateUserMutation = { updateUser: { _id: string | null, phone: string | null, workphone: string | null, abonentId: string | null, telegramId: string | null, maxId: string | null } | null };

export type UploadBaseMutationVariables = Exact<{
  input: BaseInput;
}>;


export type UploadBaseMutation = { uploadBase: Array<string | null> | null };

export type ViewCourseMutationVariables = Exact<{
  link: string;
}>;


export type ViewCourseMutation = { viewCourse: boolean | null };

export type ViewToursMutationVariables = Exact<{
  ids: Array<string | null | undefined> | string;
}>;


export type ViewToursMutation = { viewTours: boolean | null };

export type AgentListQueryVariables = Exact<{ [key: string]: never; }>;


export type AgentListQuery = { agentList: Array<unknown> | null };

export type AllCalculatorsQueryVariables = Exact<{
  q?: string | null | undefined;
  free?: boolean | null | undefined;
  filter?: unknown;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  rerenderKey?: number | null | undefined;
}>;


export type AllCalculatorsQuery = { allCalculators: Array<unknown> | null, _allCalculatorsMeta: { count: number | null } | null };

export type AllClientContactsQueryVariables = Exact<{
  companyIds: Array<string | number> | string | number;
}>;


export type AllClientContactsQuery = { allClientContacts: Array<{ _id: string | null, name: string | null, city: string | null, phone: Array<string | null> | null, email: string | null, post: string | null, company: { _id: string | null, name: string | null } | null } | null> | null };

export type AllClientLeadsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllClientLeadsQuery = { allClientLeads: unknown };

export type AllCompaniesQueryVariables = Exact<{
  rerenderKey?: number | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: CompanyFilter | null | undefined;
}>;


export type AllCompaniesQuery = { allCompanies: Array<{ _id: string | null, name: string | null, inn: string | null, phone: Array<string | null> | null, email: string | null, limit_summ: string | null, limit_count: string | null, createdAt: unknown, types: Array<string | null> | null, lastNote: unknown, leads: Array<{ id: string, name: string | null, project_id: string | null, creator: { id: string | null, name: string | null } | null } | null> | null, tasks: Array<{ is_completed: boolean | null } | null> | null, group: { id: string | null, name: string | null } | null, responsible_user: { _id: string | null, name: string | null } | null } | null> | null, _allCompaniesMeta: { count: number | null } | null };

export type AllContactsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: ContactFilter | null | undefined;
}>;


export type AllContactsQuery = { allContacts: Array<{ _id: string | null, name: string | null, city: string | null, phone: Array<string | null> | null, email: string | null, createdAt: unknown, group: { id: string | null, name: string | null } | null, company: { _id: string | null, name: string | null } | null, responsible_user: { _id: string | null, id: string | null, name: string | null } | null } | null> | null, _allContactsMeta: { count: number | null } | null };

export type AllContractsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: ContractFilter | null | undefined;
}>;


export type AllContractsQuery = { allContracts: Array<{ id: string, name: string, date: unknown, status: string | null, debt: string | null, summ: string | null, duration: string | null, payments_remainder: string | null, balanceholder: string | null, property_vin: string | null, property_name: string | null, property_sign: string | null, contract_id: string | null, date_payment: string | null, manager: { name: string | null } | null, partner: { name: string | null, id: string } | null, payments: Array<{ date: string | null, plan: string | null, paid: string | null } | null> | null } | null> | null, _allContractsMeta: { count: number | null } | null };

export type AllContractsLightQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: ContractFilter | null | undefined;
}>;


export type AllContractsLightQuery = { allContracts: Array<{ id: string, name: string, date: unknown } | null> | null };

export type AllCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCoursesQuery = { allCourses: Array<{ id: string | null, title: string | null, link: string | null, description: string | null, viewed: boolean | null } | null> | null };

export type AllDirectoriesQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: DirectoryFilter | null | undefined;
}>;


export type AllDirectoriesQuery = { allSubdivisions: Array<string | null>, allDepartments: Array<string | null>, allDirectories: Array<{ id: string, name: string, birthday: unknown, post: string, workphone: string | null, personal_phone: string | null, additional_phone: string | null, email: string | null, address: string | null, department: string, subdivision: string, status: string | null, description: string | null, user_id: string | null, isOnline: boolean | null, lastActivity: unknown } | null> | null, _allDirectoriesMeta: { count: number | null } | null };

export type AllEventsQueryVariables = Exact<{
  type?: string | null | undefined;
}>;


export type AllEventsQuery = { allEvents: Array<{ id: string | null, title: string | null, subtitle: string | null, text: string | null, type: string | null, role: string | null, images: Array<string | null> | null, createdAt: unknown, updatedAt: unknown } | null> | null };

export type AllFaqPopularQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFaqPopularQuery = { allFaqPopular: Array<{ id: string, theme: string, question: string, answer: string, pay: string | null } | null> | null };

export type AllFaqResponsibleQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFaqResponsibleQuery = { allFaqResponsible: Array<string | null> | null };

export type AllHoldingsQueryVariables = Exact<{
  input?: HoldingFilter | null | undefined;
}>;


export type AllHoldingsQuery = { allHoldings: Array<{ id: string | null, name: string | null, description: string | null, companies: Array<{ id: string, name: string | null, inn: string | null } | null> | null } | null> | null };

export type AllKanbanLeadsQueryVariables = Exact<{
  filter?: KanbanLeadsFilter | null | undefined;
  pagination?: Array<KanbanLeadsStatusPaginationInput | null | undefined> | KanbanLeadsStatusPaginationInput | null | undefined;
  globalPagination?: KanbanLeadsStatusGlobalPaginationInput | null | undefined;
}>;


export type AllKanbanLeadsQuery = { allKanbanLeads: { meta: { totalCount: number, columns: Array<{ field: string, name: string, count: number } | null> }, data: Array<{ statusValue: string, statusName: string, count: number, data: Array<{ id: string, created_by: string | null, summ: string | null, createdAt: unknown, status: LeadStatus | null, group: { id: string | null, name: string | null } | null, company: { _id: string | null, name: string | null, inn: string | null } | null, responsible_user: { _id: string | null, name: string | null } | null, creator: { id: string | null, name: string | null } | null } | null> } | null> } | null };

export type AllLeadsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: LeadFilter | null | undefined;
  checked?: boolean | null | undefined;
}>;


export type AllLeadsQuery = { allLeads: Array<{ _id: string, project_id: string | null, created_by: string | null, summ: string | null, createdAt: unknown, status: LeadStatus | null, projectNumber: number | null, projectCreatedAt: unknown, group: { id: string | null, name: string | null } | null, company: { _id: string | null, name: string | null, inn: string | null } | null, responsible_user: { _id: string | null, name: string | null } | null, contracts: Array<{ id: string, name: string, status: string | null } | null> | null, creator: { id: string | null, name: string | null } | null } | null> | null, _allLeadsMeta: { count: number | null } | null };

export type AllManagerDesktopLeadsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: LeadFilter | null | undefined;
  checked?: boolean | null | undefined;
}>;


export type AllManagerDesktopLeadsQuery = { allLeads: Array<{ _id: string, id: string, name: string | null, createdAt: unknown, status: LeadStatus | null, calculators: Array<unknown> | null, calcPriceSum: number | null, projectNumber: number | null, responsible_user: { _id: string | null, id: string | null, name: string | null } | null, creator: { _id: string | null, id: string | null, name: string | null } | null, group: { id: string | null, name: string | null } | null, contracts: Array<{ id: string, name: string, status: string | null } | null> | null, company: { _id: string | null, id: string, name: string | null, inn: string | null } | null, nextTask: { _id: string, id: string, task_type: TaskType | null, complete_till_at: unknown, is_completed: boolean | null } | null, serviceComment: { _id: string, id: string, text: string | null } | null } | null> | null, _allLeadsMeta: { count: number | null } | null };

export type AllMemoContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMemoContractsQuery = { allMemoContracts: Array<{ id: string, name: string, contract_id: string | null } | null> | null };

export type AllMemoThemesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMemoThemesQuery = { allMemoThemes: Array<unknown> | null };

export type AllMessageTemplatesQueryVariables = Exact<{
  responsible_id?: string | null | undefined;
  type?: string | null | undefined;
}>;


export type AllMessageTemplatesQuery = { allMessageTemplates: Array<{ id: string, title: string, message: string, responsible_id: string, type: string } | null> | null };

export type AllOsContractsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: ContractFilter | null | undefined;
}>;


export type AllOsContractsQuery = { allContracts: Array<{ id: string, name: string, date: unknown, status: string | null, debt: string | null, dz1: string | null, dz2: string | null, dz3: string | null, summ: string | null, duration: string | null, payments_remainder: string | null, balanceholder: string | null, property_name: string | null, contract_id: string | null, date_payment: string | null, phone: string | null, partner: { name: string | null, id: string } | null, payments: Array<{ date: string | null, plan: string | null, paid: string | null } | null> | null, note: { _id: string, text: string | null, element: unknown, element_type: string | null, is_editable: boolean | null, createdAt: unknown, responsible_user: { _id: string | null, name: string | null } | null } | null } | null> | null, _allContractsMeta: { count: number | null } | null };

export type AllPartnersQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: PartnerFilter | null | undefined;
}>;


export type AllPartnersQuery = { allPartners: Array<{ id: string, rs: string | null, ks: string | null, inn: string | null, kpp: string | null, bik: string | null, name: string | null, bank: string | null, email: string | null, phone: string | null, adresU: string | null, adresD: string | null, isemail: boolean | null, fullname: string | null } | null> | null, _allPartnersMeta: { count: number | null } | null };

export type AllPartnersWithContractsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: PartnerFilter | null | undefined;
  filterContract?: ContractFilter | null | undefined;
}>;


export type AllPartnersWithContractsQuery = { allPartners: Array<{ id: string, rs: string | null, ks: string | null, inn: string | null, kpp: string | null, bik: string | null, name: string | null, bank: string | null, email: string | null, phone: string | null, adresU: string | null, adresD: string | null, isemail: boolean | null, fullname: string | null, contracts: Array<{ id: string, name: string, status: string | null } | null> | null } | null> | null, _allPartnersMeta: { count: number | null } | null };

export type AllProjectleadsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectleadsQuery = { projectLeads: Array<{ id: string, name: string | null, project_id: string | null, createdAt: unknown, company: { name: string | null, inn: string | null } | null } | null> | null };

export type AllProjectsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  filter?: ProjectFilter | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
}>;


export type AllProjectsQuery = { allProjects: Array<{ id: string, date: unknown, status: string | null, product: string | null, manager: { name: string | null } | null } | null> | null, _allProjectsMeta: { count: number | null } | null };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { allTags: Array<{ id: string, name: string | null } | null> | null };

export type AllTasksQueryVariables = Exact<{
  rerenderKey?: number | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  filter?: TaskFilter | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
}>;


export type AllTasksQuery = { allTasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, updatedAt: unknown, is_completed: boolean | null, task_type: TaskType | null, phone: string | null, created_by: { _id: string | null, name: string | null } | null } | null> | null };

export type AllToursQueryVariables = Exact<{ [key: string]: never; }>;


export type AllToursQuery = { allTours: Array<{ id: string, name: string, text: string, block: string, page: string, order: number, role: Array<string | null> | null, viewed: boolean, redirect: string | null } | null> | null };

export type AllUsersCoursesQueryVariables = Exact<{
  filter?: CourseFilter | null | undefined;
}>;


export type AllUsersCoursesQuery = { allUsersCourses: Array<{ id: string | null, user_id: string | null, name: string | null, role: UserRole, banned: boolean | null, courses: Array<unknown> | null, group: { id: string | null } | null } | null> | null };

export type CalcServicesQueryVariables = Exact<{
  calcId: string;
}>;


export type CalcServicesQuery = { calcServices: Array<unknown> | null, calcServicesList: Array<unknown> | null };

export type CheckProjectQueryVariables = Exact<{
  id: string | number;
}>;


export type CheckProjectQuery = { checkProject: unknown };

export type CompanyQueryVariables = Exact<{
  rerenderKey?: number | null | undefined;
  id: string | number;
  skip?: number | null | undefined;
  limit?: number | null | undefined;
}>;


export type CompanyQuery = { Company: { _id: string | null, name: string | null, inn: string | null, email: string | null, phone: Array<string | null> | null, sign_date: string | null, createdAt: unknown, files: Array<unknown> | null, limit_summ: string | null, limit_count: string | null, balance_summ: string | null, balance_count: string | null, period: string | null, _allNotesMeta: number | null, rating: string | null, rating_date: string | null, types: Array<string | null> | null, diadoc: { HasCertificateToSign: boolean | null } | null, sign: { createdAt: unknown } | null, holding: { id: string | null, name: string | null, description: string | null, companies: Array<{ id: string, name: string | null, inn: string | null } | null> | null } | null, contacts: Array<{ _id: string | null, name: string | null, phone: Array<string | null> | null, email: string | null, city: string | null, post: string | null, birthday: unknown, tags: Array<{ id: string, name: string | null } | null> | null, responsible_user: { _id: string | null, name: string | null } | null } | null> | null, notes: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, note_type: string | null, is_editable: boolean | null, createdAt: unknown, isPinned: boolean | null, created_by: { _id: string | null, name: string | null, banned: boolean | null } | null, responsible_user: { _id: string | null, name: string | null } | null } | null> | null, tasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null, banned: boolean | null } | null } | null> | null, activeTasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null } | null } | null> | null, tags: Array<{ id: string, name: string | null } | null> | null, leads: Array<{ id: string, name: string | null, status: LeadStatus | null } | null> | null, responsible_user: { _id: string | null, name: string | null } | null } | null };

export type ContactQueryVariables = Exact<{
  id: string | number;
  skip?: number | null | undefined;
  limit?: number | null | undefined;
}>;


export type ContactQuery = { Contact: { _id: string | null, name: string | null, city: string | null, post: string | null, email: string | null, phone: Array<string | null> | null, createdAt: unknown, birthday: unknown, _allNotesMeta: number | null, company: { _id: string | null, inn: string | null, name: string | null, phone: Array<string | null> | null, email: string | null, tags: Array<{ id: string, name: string | null } | null> | null, responsible_user: { _id: string | null, name: string | null } | null } | null, notes: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, note_type: string | null, is_editable: boolean | null, isPinned: boolean | null, createdAt: unknown, created_by: { _id: string | null, name: string | null, banned: boolean | null } | null, responsible_user: { _id: string | null, name: string | null } | null } | null> | null, activeTasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null } | null } | null> | null, tasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null, banned: boolean | null } | null } | null> | null, tags: Array<{ id: string, name: string | null } | null> | null, responsible_user: { _id: string | null, name: string | null } | null } | null };

export type ContractQueryVariables = Exact<{
  id: string | number;
}>;


export type ContractQuery = { Contract: { id: string, contract_id: string | null, name: string, files: Array<unknown> | null, date: unknown, debt: string | null, summ: string | null, status: string | null, duration: string | null, property_vin: string | null, property_name: string | null, property_sign: string | null, balanceholder: string | null, delivered: boolean | null, signers: unknown, guarantor: unknown, lead: { id: string, name: string | null } | null, manager: { name: string | null, email: string, phone: string | null } | null, partner: { name: string | null, id: string, inn: string | null, diadoc: { HasCertificateToSign: boolean | null } | null } | null, provider: { id: string | null, name: string | null, inn: string | null, kpp: string | null } | null, payments: Array<{ date: string | null, plan: string | null, paid: string | null } | null> | null, archives: Array<{ id: string | null, name: string | null, type: string | null, summ: string | null, status: string | null } | null> | null, tags: Array<{ id: string, name: string | null } | null> | null, beacons: Array<{ id: string, contract_id: string | null, subject: string | null, color: string | null, date_of_issue: string | null, manager_phone: string | null, provider: string | null, provider_name: string | null, provider_address: string | null, provider_contact: string | null, kit: string | null, installation_date_plan: string | null, installation_date_fact: string | null } | null> | null } | null };

export type CounteragentSignedDocumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type CounteragentSignedDocumentsQuery = { counteragentSignedDiadocDocuments: unknown, counteragentSignedSbisDocuments: unknown };

export type DiadocDocumentsQueryVariables = Exact<{
  refreshKey?: number | null | undefined;
}>;


export type DiadocDocumentsQuery = { diadocDocuments: { totalCount: number | null, documents: Array<{ id: string | null, messageId: string | null, toTitle: string | null, toBoxId: string | null, fromTitle: string | null, fromBoxId: string | null, date: number | null, operator: string | null, documentId: string | null, document_view: string | null, responsible: { id: string | null, name: string | null, role: UserRole, user_id: string | null } | null, signer: { id: string | null, name: string | null, role: UserRole, user_id: string | null } | null, contract: { id: string, name: string, partner: { id: string, name: string | null, inn: string | null } | null } | null, files: Array<{ id: string | null, attachmentType: string | null, size: number | null, filename: string | null } | null> | null } | null> | null } | null, sbisDocuments: { totalCount: number | null, documents: Array<{ id: string | null, messageId: string | null, toTitle: string | null, toBoxId: string | null, fromTitle: string | null, fromBoxId: string | null, date: number | null, kpp: string | null, document_view: string | null, operator: string | null, documentId: string | null, responsible: { id: string | null, name: string | null, role: UserRole, user_id: string | null } | null, signer: { id: string | null, name: string | null, role: UserRole, user_id: string | null } | null, contract: { id: string, name: string, partner: { id: string, inn: string | null } | null } | null, files: Array<{ id: string | null, attachmentType: string | null, size: number | null, filename: string | null } | null> | null } | null> | null } | null };

export type DirectoryQueryVariables = Exact<{
  user_oid: string | number;
}>;


export type DirectoryQuery = { Directory: { _id: string | null, id: string, name: string, birthday: unknown, post: string, workphone: string | null, personal_phone: string | null, additional_phone: string | null, email: string | null, address: string | null, department: string, subdivision: string, status: string | null, description: string | null, user_id: string | null, isOnline: boolean | null, lastActivity: unknown } | null };

export type DocVisasQueryVariables = Exact<{
  doc: string;
}>;


export type DocVisasQuery = { docVisas: Array<unknown> | null };

export type EdoRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type EdoRoutesQuery = { edoRoutes: Array<{ id: string | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown, creator: { id: string | null, name: string | null } | null, responsible: { id: string | null, name: string | null } | null, contract: { id: string, name: string, partner: { id: string, inn: string | null } | null } | null, waypoints: Array<{ id: string | null, to_name: string | null, to_inn: string | null, to_kpp: string | null, from_name: string | null, from_inn: string | null, operator: EdoOperator | null, status: string | null, pack: boolean | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown, route: { id: string | null, contract: { id: string } | null } | null, documents: Array<{ id: string | null, document_id: string | null, document_view: string | null, message_id: string | null, entity_id: string | null, status: string | null, filename: string | null, fileext: string | null, hidden: boolean | null, createdAt: unknown, updatedAt: unknown } | null> | null } | null> | null } | null> | null };

export type EdoSignersQueryVariables = Exact<{
  operator?: EdoOperator | null | undefined;
}>;


export type EdoSignersQuery = { edoSigners: Array<{ id: string | null, name: string | null, roles: Array<string | null> | null, group: { id: string | null } | null } | null> | null };

export type ExpiredTasksQueryVariables = Exact<{
  id?: string | null | undefined;
  today?: unknown;
}>;


export type ExpiredTasksQuery = { _allTasksMeta: { count: number | null } | null };

export type GetCalcQueryVariables = Exact<{
  id: string;
}>;


export type GetCalcQuery = { getCalc: Array<unknown> | null };

export type GetCompanyQueryVariables = Exact<{
  inn: string;
}>;


export type GetCompanyQuery = { getCompany: unknown };

export type GetFilterUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilterUsersQuery = { getFilterUsers: unknown };

export type GuarantorQueryVariables = Exact<{
  inn: string;
  id: string | number;
}>;


export type GuarantorQuery = { checkCompany: unknown };

export type HoldingQueryVariables = Exact<{
  id: string | number;
}>;


export type HoldingQuery = { Holding: { id: string | null, name: string | null, description: string | null, companies: Array<{ id: string, name: string | null, inn: string | null } | null> | null } | null };

export type IndividualTryFullCalcQueryVariables = Exact<{
  input: FullCalcInput;
}>;


export type IndividualTryFullCalcQuery = { individualTryFullCalc: unknown };

export type LeadQueryVariables = Exact<{
  rerenderKey?: number | null | undefined;
  id: string | number;
  skip?: number | null | undefined;
  limit?: number | null | undefined;
}>;


export type LeadQuery = { Lead: { id: string, created_by: string | null, createdAt: unknown, status: LeadStatus | null, callCenter: boolean | null, internet: boolean | null, _id: string, project_id: string | null, product: string | null, name: string | null, files: Array<unknown> | null, _allNotesMeta: number | null, calculators: Array<unknown> | null, guarantors: Array<unknown>, creator: { id: string | null, name: string | null } | null, statusLog: Array<{ id: string, createdAt: unknown, status: { id: string, title: string | null, value: string | null } | null, user: { id: string | null, name: string | null } | null } | null> | null, responsible_user: { _id: string | null, name: string | null } | null, company: { id: string, _id: string | null, inn: string | null, name: string | null, phone: Array<string | null> | null, email: string | null, rating: string | null, rating_date: string | null, accreditation: string | null, tags: Array<{ id: string, name: string | null } | null> | null, responsible_user: { _id: string | null, name: string | null } | null, contacts: Array<{ _id: string | null, name: string | null, phone: Array<string | null> | null, email: string | null, city: string | null, post: string | null, tags: Array<{ id: string, name: string | null } | null> | null, responsible_user: { _id: string | null, name: string | null } | null } | null> | null } | null, notes: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, note_type: string | null, is_editable: boolean | null, createdAt: unknown, isPinned: boolean | null, created_by: { _id: string | null, name: string | null, banned: boolean | null } | null, responsible_user: { _id: string | null, name: string | null } | null } | null> | null, activeTasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null } | null } | null> | null, tasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, is_completed: boolean | null, task_type: TaskType | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null, banned: boolean | null } | null } | null> | null, tags: Array<{ id: string, name: string | null } | null> | null, contracts: Array<{ id: string, name: string, status: string | null, contract_id: string | null, phone: string | null, signers: unknown, delivered: boolean | null } | null> | null } | null };

export type LeadInMenuQueryVariables = Exact<{
  id: string | number;
}>;


export type LeadInMenuQuery = { Lead: { _id: string, name: string | null, createdAt: unknown, status: LeadStatus | null, files: Array<unknown> | null, calculators: Array<unknown> | null, calcPriceSum: number | null, contracts: Array<{ id: string, name: string, files: Array<unknown> | null, status: string | null } | null> | null, company: { _id: string | null, name: string | null, inn: string | null, files: Array<unknown> | null, email: string | null, phone: Array<string | null> | null, sign_date: string | null, contacts: Array<{ _id: string | null, id: string, post: string | null, name: string | null, email: string | null, phone: Array<string | null> | null } | null> | null } | null, nextTask: { _id: string, id: string, task_type: TaskType | null, complete_till_at: unknown, is_completed: boolean | null } | null, serviceComment: { _id: string, id: string, text: string | null } | null } | null };

export type AllLeadDoTasksQueryVariables = Exact<{
  id: string;
}>;


export type AllLeadDoTasksQuery = { allLeadDoTasks: Array<unknown> | null };

export type MailMessageQueryVariables = Exact<{
  uidMessage: string;
}>;


export type MailMessageQuery = { MailMessage: { id: string | null, uid: number | null, flags: Array<string | null> | null, date: unknown, subject: string | null, text: string | null, from: Array<{ address: string | null, name: string | null } | null> | null, to: Array<{ address: string | null, name: string | null } | null> | null, replyTo: Array<{ address: string | null, name: string | null } | null> | null, attachments: Array<{ partId: string | null, filename: string | null, size: number | null } | null> | null } | null };

export type MailMessagesQueryVariables = Exact<{
  filter: MailMessagesFilter;
}>;


export type MailMessagesQuery = { MailMessages: Array<{ id: string | null, uid: number | null, viewed: boolean | null, date: unknown, company_address: string | null, user_address: string | null, type: MailType | null, text: string | null } | null> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me: { _id: string | null, name: string | null, role: UserRole, roles: Array<string | null> | null, workphone: string | null, phone: string | null, abonentId: string | null, telegramId: string | null, maxId: string | null, email: string, settings: unknown, ref_id: Array<string | null> | null, courses: Array<unknown> | null, user_id: string | null, tester: boolean | null, group: { id: string | null } | null, tours: Array<{ id: string, name: string, text: string, block: string, page: string, order: number, role: Array<string | null> | null, viewed: boolean, redirect: string | null } | null> | null } | null };

export type OtherLeasingQueryVariables = Exact<{
  inn: string;
  conturfocus?: boolean | null | undefined;
}>;


export type OtherLeasingQuery = { otherLeasing: Array<unknown> };

export type PartnerForInnQueryVariables = Exact<{ [key: string]: never; }>;


export type PartnerForInnQuery = { PartnerForInn: unknown };

export type PartnerForUidQueryVariables = Exact<{
  partner_id: string;
}>;


export type PartnerForUidQuery = { PartnerForUid: { id: string, inn: string | null, name: string | null, email: string | null, fullname: string | null, kpp: string | null, adresU: string | null, adresD: string | null, phone: string | null, rs: string | null, bank: string | null, bik: string | null, ks: string | null } | null };

export type PrefillProjectQueryVariables = Exact<{
  leadId?: string | null | undefined;
}>;


export type PrefillProjectQuery = { PrefillProject: { id: string | null, project_id: string | null, company_data: unknown, contact_data: unknown } | null };

export type ProjectPropertiesQueryVariables = Exact<{
  id: string;
}>;


export type ProjectPropertiesQuery = { projectProperties: Array<unknown> | null };

export type ProviderListQueryVariables = Exact<{
  inn?: string | null | undefined;
}>;


export type ProviderListQuery = { providerList: Array<unknown> | null };

export type GetReportQueryVariables = Exact<{
  sort?: PeriodFilter | null | undefined;
  filter?: unknown;
}>;


export type GetReportQuery = { getReport: Array<unknown> | null };

export type SearchQueryVariables = Exact<{
  q?: string | null | undefined;
}>;


export type SearchQuery = { allContracts: Array<{ name: string, id: string } | null> | null, allContacts: Array<{ name: string | null, id: string, company: { id: string, name: string | null } | null } | null> | null, allCompanies: Array<{ name: string | null, id: string } | null> | null, allLeads: Array<{ status: LeadStatus | null, name: string | null, id: string, company: { id: string, name: string | null } | null } | null> | null, privateCompanies: Array<{ name: string | null, id: string, responsible_user: { id: string | null, name: string | null } | null, tags: Array<{ id: string, name: string | null } | null> | null } | null> | null };

export type BankListQueryVariables = Exact<{
  bik: string;
}>;


export type BankListQuery = { bankList: Array<unknown> | null };

export type SearchCompaniesQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: CompanyFilter | null | undefined;
}>;


export type SearchCompaniesQuery = { allCompanies: Array<{ _id: string | null, name: string | null, email: string | null, phone: Array<string | null> | null, inn: string | null, partner_id: string | null } | null> | null };

export type AllContactsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: ContactFilter | null | undefined;
}>;


export type AllContactsQuery = { allContacts: Array<{ _id: string | null, name: string | null, email: string | null, phone: Array<string | null> | null, city: string | null, post: string | null } | null> | null };

export type SearchPartnersQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: PartnerFilter | null | undefined;
}>;


export type SearchPartnersQuery = { allPartners: Array<{ id: string, name: string | null, fullname: string | null, inn: string | null } | null> | null };

export type SearchTagsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  filter?: TagFilter | null | undefined;
}>;


export type SearchTagsQuery = { allTags: Array<{ id: string, name: string | null } | null> | null };

export type SearchUsersQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: UserFilter | null | undefined;
}>;


export type SearchUsersQuery = { allUsers: Array<{ _id: string | null, name: string | null, group: { id: string | null } | null } | null> | null };

export type AllDoTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDoTasksQuery = { allDoTasks: Array<unknown> | null };

export type AllEmployeeDoTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEmployeeDoTasksQuery = { allEmployeeDoTasks: Array<unknown> | null };

export type TasksTableQueryVariables = Exact<{
  rerenderKey?: number | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: TaskFilter | null | undefined;
}>;


export type TasksTableQuery = { allTasks: Array<{ _id: string, text: string | null, element: unknown, element_type: string | null, complete_till_at: unknown, createdAt: unknown, updatedAt: unknown, is_completed: boolean | null, task_type: TaskType | null, phone: string | null, group: { id: string | null, name: string | null } | null, responsible_user: { _id: string | null, name: string | null } | null, created_by: { _id: string | null, name: string | null } | null } | null> | null, _allTasksMeta: { count: number | null } | null };

export type TryCalcQueryVariables = Exact<{
  input: CalcInput;
}>;


export type TryCalcQuery = { tryCalc: unknown };

export type TryFullCalcQueryVariables = Exact<{
  input: FullCalcInput;
}>;


export type TryFullCalcQuery = { tryFullCalc: unknown };

export type TvNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type TvNotificationsQuery = { getNotifications: Array<unknown> | null };

export type UnprocessedLeadsQueryVariables = Exact<{ [key: string]: never; }>;


export type UnprocessedLeadsQuery = { _unprocessedLeadsMeta: { count: number | null } | null };

export type UserForAdminQueryVariables = Exact<{
  id: string | number;
}>;


export type UserForAdminQuery = { userForAdmin: { email: string } | null };

export type AllMemosQueryVariables = Exact<{
  page: number;
  perPage: number;
  filter: MemoFilter;
}>;


export type AllMemosQuery = { allMemos: Array<unknown> | null, _allMemosMeta: { count: number | null } | null };

export type ClientSupportRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientSupportRequestsQuery = { clientSupportRequests: Array<{ id: string, client_id: string, client_name: string, responsible_ids: Array<string>, created_date: unknown, updated_date: unknown, last_date: unknown, uuid: string | null, status: string, theme: { id: string, name: string, priority: string }, questions: Array<{ id: string, question: string, question_files: Array<unknown> | null, created_date: unknown, updated_date: unknown, answer: string | null, answer_files: Array<unknown> | null, support_request: { id: string } } | null> | null } | null> | null };

export type ManagerSupportRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type ManagerSupportRequestsQuery = { managerSupportRequests: Array<{ id: string, client_id: string, client_name: string, company_id: string | null, company_name: string | null, role: string, responsible_ids: Array<string>, created_date: unknown, updated_date: unknown, last_date: unknown, status: string, theme: { id: string, name: string, priority: string }, questions: Array<{ id: string, question: string, question_files: Array<unknown> | null, created_date: unknown, updated_date: unknown, answer: string | null, answer_files: Array<unknown> | null, support_request: { id: string } } | null> | null } | null> | null };

export type AllDoTasksMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type AllDoTasksMetaQuery = { _allDoTasksMeta: { count: number | null } | null };

export type AllGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGroupsQuery = { allGroups: Array<unknown> | null };

export type AllThemesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllThemesQuery = { allThemes: Array<{ id: string, name: string, priority: string, prefilledText: string | null } | null> | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { allUsers: Array<{ id: string | null, user_id: string | null, name: string | null, role: UserRole, roles: Array<string | null> | null, banned: boolean | null, isOnline: boolean | null, group: { id: string | null } | null } | null> | null };

export type LastEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type LastEventsQuery = { lastEvents: Array<{ id: string | null, title: string | null } | null> | null };

export type StatusQueryVariables = Exact<{ [key: string]: never; }>;


export type StatusQuery = { status: string | null };

export type _AppealMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type _AppealMetaQuery = { _appealMeta: { count: number | null } | null };

export type _SupportMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type _SupportMetaQuery = { _supportMeta: { count: number | null } | null };

export type LeadStatusListQueryVariables = Exact<{ [key: string]: never; }>;


export type LeadStatusListQuery = { leadStatusList: Array<unknown> | null };
