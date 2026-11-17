/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type SearchContactsQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  sortField?: string | null | undefined;
  sortOrder?: string | null | undefined;
  filter?: ContactFilter | null | undefined;
}>;


export type SearchContactsQuery = { allContacts: Array<{ _id: string | null, name: string | null, email: string | null, phone: Array<string | null> | null, city: string | null, post: string | null } | null> | null };

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
