import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(window.SUPABASE_URL, window.SUPABASE_ANON);

// ---------- TRANSLATIONS ----------
const translations = {
  ar: {
    // Nav
    nav_overview: "نظرة عامة",
    nav_employees: "مكتبة الموظفين",
    nav_holidays: "الإجازات",
    nav_reports: "التقارير",
    nav_activity: "النشاط",
    nav_about: "عن التطبيق",
    sign_out: "تسجيل الخروج",

    // Auth
    auth_title: "تسجيل الدخول",
    tab_signin: "دخول",
    tab_signup: "حساب جديد",
    label_email: "البريد الإلكتروني",
    label_password: "كلمة المرور",
    label_username: "اسم المستخدم (Username)",
    btn_signin: "دخول",
    btn_signup: "إنشاء حساب",
    auth_hint: "لأمان البيانات ومتابعة التعديلات لكل مستخدم.",

    // Overview
    overview_title: "نظرة عامة",
    label_year: "السنة",
    btn_refresh: "تحديث",
    h3_month_details: "حسب الشهر (تفاصيل)",
    h3_year_details: "حسب السنة (تفاصيل + إجمالي)",
    h4_year_totals: "إجمالي السنة لكل موظف",

    // Table headers
    th_emp_name: "اسم الموظف",
    th_start_g: "بداية (ميلادي)",
    th_end_g: "نهاية (ميلادي)",
    th_start_h: "بداية (هجري)",
    th_end_h: "نهاية (هجري)",
    th_days: "أيام",
    th_duration_days: "المدة (أيام)",
    th_type: "نوع",
    th_reason: "سبب",
    th_total_days: "إجمالي الأيام",
    th_code: "الرقم الوظيفي",
    th_city: "المدينة",
    th_dept: "القسم",
    th_updated_by: "آخر تعديل بواسطة",
    th_actions: "إجراءات",
    th_emp: "الموظف",
    th_attachments: "مرفقات",
    th_entry_by: "مدخل/معدِّل السجل",
    th_time: "الوقت",
    th_user: "المستخدم",
    th_action: "العملية",
    th_entity: "الكيان",
    th_id: "المعرف",
    th_details: "تفاصيل",

    // Employees
    employees_title: "مكتبة الموظفين",
    ph_search_emp: "ابحث بالاسم أو الرقم الوظيفي",
    btn_add_emp: "إضافة موظف",

    // Holidays
    holidays_title: "الإجازات",
    label_emp_search: "الموظف (بحث)",
    btn_clear: "مسح",
    btn_add_hol: "إضافة إجازة",
    hol_hint: "اكتب الرقم/الاسم ثم اضغط Enter لتأكيد الاختيار وإظهار بطاقة الموظف، ثم أضف الإجازة.",

    // Reports
    reports_title: "التقارير",
    label_emp_optional: "الموظف (اختياري)",
    btn_all_emps: "تحديد كل الموظفين",
    label_from: "من",
    label_to: "إلى",
    btn_apply: "تطبيق",
    btn_print: "طباعة PDF",
    btn_export_xls: "تصدير Excel",
    h3_report_results: "نتائج التقرير",
    totals_days: "إجمالي الأيام:",

    // Activity
    activity_title: "النشاط (سجل التعديلات)",
    label_entity: "الكيان",
    opt_all: "الكل",
    opt_employees: "الموظفون",
    opt_holidays: "الإجازات",
    label_user: "المستخدم (Username)",
    ph_user_hint: "اتركه فارغًا للكل",

    // About
    about_title: "عن التطبيق",

    // Drawer
    drawer_save: "حفظ",
    drawer_cancel: "إلغاء",
    drawer_add: "إضافة",
    drawer_edit_emp: "تعديل موظف",
    drawer_add_emp: "إضافة موظف",
    drawer_edit_hol: "تعديل إجازة",
    drawer_add_hol: "إضافة إجازة",

    // Form labels
    fld_code: "الرقم الوظيفي",
    fld_name: "اسم الموظف",
    fld_city: "المدينة",
    fld_dept: "القسم",
    fld_notes: "ملاحظات داخلية",
    fld_emp: "الموظف",
    fld_select_emp: "اختر الموظف",
    fld_dates_g: "التواريخ (ميلادي)",
    fld_start_g: "بداية (ميلادي)",
    fld_end_g: "نهاية (ميلادي)",
    fld_dates_h: "التواريخ (هجري)",
    fld_start_h: "بداية (هجري)",
    fld_end_h: "نهاية (هجري)",
    fld_hol_details: "تفاصيل الإجازة",
    fld_type: "نوع",
    fld_reason: "سبب",
    fld_attach: "مرفقات (اختياري)",
    fld_file: "ملف",
    fld_attach2: "مرفقات 2 (اختياري)",
    fld_file2: "ملف 2",
    ph_type: "اعتيادية / مرضية",
    ph_reason: "سفر / مراجعة",
    notes_hint: "هذه الملاحظات تظهر فقط داخل النظام.",

    // Buttons
    btn_edit: "تعديل",
    btn_delete: "حذف",
    file_n: "ملف",

    // Toasts / Alerts
    t_saved: "تم الحفظ",
    t_emp_picked: "تم اختيار الموظف",
    t_emp_not_found: "لم يتم العثور على موظف فريد؛ اختر من القائمة",
    t_lang_ar: "تم التحويل إلى العربية",
    t_lang_en: "Switched to English",
    t_signed_out: "تم تسجيل الخروج",
    t_ready: "جاهز.",
    t_report_emp: "تم اختيار الموظف للتقرير",
    t_all_emps: "تم اختيار جميع الموظفين",
    a_code_name_required: "الرقم والاسم مطلوبان",
    a_pick_emp: "اختر الموظف",
    a_enter_g_dates: "أدخل تواريخ البداية/النهاية الميلادية",
    a_enter_h_dates: "أدخل تواريخ البداية/النهاية الهجرية",
    a_type_reason_required: "الحقلان نوع وسبب الإجازة إلزاميان",
    a_end_after_start: "تاريخ النهاية يجب أن يكون بعد البداية الميلادية",
    a_save_error: "خطأ أثناء الحفظ: ",
    a_confirm_delete: "حذف السجل؟",
    a_account_created: "تم إنشاء الحساب. إذا كانت سياسة البريد مفعلة، قد تحتاج لتأكيد البريد.",
    a_no_holidays_range: "لا توجد إجازات ضمن المدى",
    a_no_emp_holidays: "لا توجد إجازات لهذا الموظف :(",
    a_emp_not_found: "الموظف غير موجود",
    rep_all_emp_prefix: "جميع الموظفين",
    rep_period: "الفترة",

    // Audit Details
    audit_added_emp: "أضاف موظف: {name}",
    audit_updated_emp: "عدل بيانات موظف: {name}",
    audit_deleted_emp: "حذف موظف (معرف: {id})",
    audit_added_hol: "أضاف إجازة للموظف {name} ({start} إلى {end})",
    audit_updated_hol: "عدل إجازة للموظف {name}",
    audit_deleted_hol: "حذف إجازة (معرف: {id})",
    audit_unknown_action: "{action} {entity} (معرف: {id})",
    audit_unknown_user: "مستخدم غير معروف",
    audit_unknown_emp: "موظف رقم {id}",
  },
  en: {
    // Nav
    nav_overview: "Overview",
    nav_employees: "Employees",
    nav_holidays: "Holidays",
    nav_reports: "Reports",
    nav_activity: "Activity",
    nav_about: "About",
    sign_out: "Sign Out",

    // Auth
    auth_title: "Sign In",
    tab_signin: "Sign In",
    tab_signup: "New Account",
    label_email: "Email",
    label_password: "Password",
    label_username: "Username",
    btn_signin: "Sign In",
    btn_signup: "Create Account",
    auth_hint: "For data security and tracking edits by user.",

    // Overview
    overview_title: "Overview",
    label_year: "Year",
    btn_refresh: "Refresh",
    h3_month_details: "By Month (Details)",
    h3_year_details: "By Year (Details + Total)",
    h4_year_totals: "Yearly Total per Employee",

    // Table headers
    th_emp_name: "Employee Name",
    th_start_g: "Start (Gregorian)",
    th_end_g: "End (Gregorian)",
    th_start_h: "Start (Hijri)",
    th_end_h: "End (Hijri)",
    th_days: "Days",
    th_duration_days: "Duration (Days)",
    th_type: "Type",
    th_reason: "Reason",
    th_total_days: "Total Days",
    th_code: "Employee Code",
    th_city: "City",
    th_dept: "Department",
    th_updated_by: "Last Updated By",
    th_actions: "Actions",
    th_emp: "Employee",
    th_attachments: "Attachments",
    th_entry_by: "Entered/Updated By",
    th_time: "Time",
    th_user: "User",
    th_action: "Action",
    th_entity: "Entity",
    th_id: "ID",
    th_details: "Details",

    // Employees
    employees_title: "Employees",
    ph_search_emp: "Search by name or employee code",
    btn_add_emp: "Add Employee",

    // Holidays
    holidays_title: "Holidays",
    label_emp_search: "Employee (Search)",
    btn_clear: "Clear",
    btn_add_hol: "Add Holiday",
    hol_hint: "Type the code/name and press Enter to confirm selection and show the employee card, then add the holiday.",

    // Reports
    reports_title: "Reports",
    label_emp_optional: "Employee (Optional)",
    btn_all_emps: "Select All Employees",
    label_from: "From",
    label_to: "To",
    btn_apply: "Apply",
    btn_print: "Print PDF",
    btn_export_xls: "Export Excel",
    h3_report_results: "Report Results",
    totals_days: "Total Days:",

    // Activity
    activity_title: "Activity (Audit Log)",
    label_entity: "Entity",
    opt_all: "All",
    opt_employees: "Employees",
    opt_holidays: "Holidays",
    label_user: "User (Username)",
    ph_user_hint: "Leave empty for all",

    // About
    about_title: "About",

    // Drawer
    drawer_save: "Save",
    drawer_cancel: "Cancel",
    drawer_add: "Add",
    drawer_edit_emp: "Edit Employee",
    drawer_add_emp: "Add Employee",
    drawer_edit_hol: "Edit Holiday",
    drawer_add_hol: "Add Holiday",

    // Form labels
    fld_code: "Employee Code",
    fld_name: "Employee Name",
    fld_city: "City",
    fld_dept: "Department",
    fld_notes: "Internal Notes",
    fld_emp: "Employee",
    fld_select_emp: "Select Employee",
    fld_dates_g: "Dates (Gregorian)",
    fld_start_g: "Start (Gregorian)",
    fld_end_g: "End (Gregorian)",
    fld_dates_h: "Dates (Hijri)",
    fld_start_h: "Start (Hijri)",
    fld_end_h: "End (Hijri)",
    fld_hol_details: "Holiday Details",
    fld_type: "Type",
    fld_reason: "Reason",
    fld_attach: "Attachment (Optional)",
    fld_file: "File",
    fld_attach2: "Attachment 2 (Optional)",
    fld_file2: "File 2",
    ph_type: "Regular / Sick",
    ph_reason: "Travel / Appointment",
    notes_hint: "These notes are visible only inside the system.",

    // Buttons
    btn_edit: "Edit",
    btn_delete: "Delete",
    file_n: "File",

    // Toasts / Alerts
    t_saved: "Saved",
    t_emp_picked: "Employee selected",
    t_emp_not_found: "No unique employee found; pick from the list",
    t_lang_ar: "تم التحويل إلى العربية",
    t_lang_en: "Switched to English",
    t_signed_out: "Signed out",
    t_ready: "Ready.",
    t_report_emp: "Employee selected for report",
    t_all_emps: "All employees selected",
    a_code_name_required: "Code and name are required",
    a_pick_emp: "Please select an employee",
    a_enter_g_dates: "Please enter Gregorian start/end dates",
    a_enter_h_dates: "Please enter Hijri start/end dates",
    a_type_reason_required: "Type and reason are required",
    a_end_after_start: "End date must be after start date",
    a_save_error: "Save error: ",
    a_confirm_delete: "Delete this record?",
    a_account_created: "Account created. If email confirmation is enabled, please confirm your email.",
    a_no_holidays_range: "No holidays in this range",
    a_no_emp_holidays: "This employee has no holiday records :(",
    a_emp_not_found: "Employee not found",
    rep_all_emp_prefix: "All Employees",
    rep_period: "Period",

    // Audit Details
    audit_added_emp: "Added employee: {name}",
    audit_updated_emp: "Updated employee: {name}",
    audit_deleted_emp: "Deleted employee (ID: {id})",
    audit_added_hol: "Added holiday for {name} ({start} to {end})",
    audit_updated_hol: "Updated holiday for {name}",
    audit_deleted_hol: "Deleted holiday (ID: {id})",
    audit_unknown_action: "{action} {entity} (ID: {id})",
    audit_unknown_user: "Unknown User",
    audit_unknown_emp: "Employee #{id}",
  }
};

let currentLang = 'ar';

function t(key){
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

// Applies translations to any element with data-i18n / data-i18n-ph
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = translations[currentLang][key];
    if(val != null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    const val = translations[currentLang][key];
    if(val != null) el.placeholder = val;
  });
  document.documentElement.lang = currentLang;
}

function id(x){ return document.getElementById(x); }
function qsAll(s, r=document){ return Array.from(r.querySelectorAll(s)); }
function toast(m){ const t=id('toast'); t.textContent=m; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 1700); }
function showView(name){ qsAll('main.view').forEach(v=>v.classList.remove('active')); id('view-'+name).classList.add('active'); }
function calcDays(sISO,eISO){ const s=new Date(sISO), e=new Date(eISO); return Math.floor((e-s)/(1000*60*60*24))+1; }

// ---------- AUTH ----------
let CURRENT_USER = null;
async function refreshUser(){
  const { data: { user } } = await supabase.auth.getUser();
  CURRENT_USER = user;
  if(user){
    const { data: profile } = await supabase.from('profiles').select('username').eq('id', user.id).maybeSingle();
    const uname = profile?.username || (user.email || 'مستخدم');
    id('userBadge').textContent = uname;
    id('userBadge').hidden = false;
    id('btnSignOut').hidden = false;
    qsAll('.navbar, .topbar').forEach(el=> el.style.pointerEvents = '');
  }else{
    id('userBadge').hidden = true;
    id('btnSignOut').hidden = true;
  }
}
async function signIn(email, pass){
  const { error } = await supabase.auth.signInWithPassword({ email, password: pass });
  if(error) throw error;
  await refreshUser();
}
async function signUp(username, email, pass){
  const { data, error } = await supabase.auth.signUp({ email, password: pass });
  if(error) throw error;
  const uid = data.user?.id;
  if(uid){
    const { error: pErr } = await supabase.from('profiles').insert({ id: uid, username });
    if(pErr){ console.warn('profile insert', pErr); }
  }
  await refreshUser();
  alert(t('a_account_created'));
}

// ---------- AUDIT ----------
async function logAction(action, entity, entity_id, payload){
  try{
    const uid = CURRENT_USER?.id || null;
    await supabase.from('audit_logs').insert({ user_id: uid, action, entity, entity_id, payload });
  }catch(e){ console.warn('audit log error', e); }
}

// ---------- EMPLOYEES CRUD ----------
let EMP_CACHE = new Map();
async function listEmployees(q=''){
  let query = supabase.from('employees').select('*, updated_by_username').order('full_name', { ascending: true });
  if(q){
    query = query.or(`full_name.ilike.%${q}%,code.ilike.%${q}%`);
  }
  const { data, error } = await query;
  if(error){ console.error(error); return []; }
  return data;
}
async function upsertEmployee(emp){
  const body = { ...emp, updated_by: CURRENT_USER?.id || null };
  const { data, error } = await supabase.from('employees').upsert(body).select();
  if(error) throw error;
  const row = data?.[0];
  await logAction(emp.id ? 'update':'insert', 'employee', row?.id, { row });
  return row;
}
async function deleteEmployee(idNum){
  const { error } = await supabase.from('employees').delete().eq('id', idNum);
  if(error) throw error;
  await logAction('delete','employee', idNum, {});
}

// ---------- HOLIDAYS CRUD ----------
async function listHolidays(filter={}){
  let query = supabase.from('holidays').select('*, updated_by_username').order('start_g', { ascending: false });
  if(filter.employee_id) query = query.eq('employee_id', filter.employee_id);
  if(filter.from) query = query.gte('start_g', filter.from);
  if(filter.to)   query = query.lte('end_g', filter.to);
  const { data, error } = await query;
  if(error){ console.error(error); return []; }
  return data;
}
async function upsertHoliday(hol){
  const body = { ...hol, updated_by: CURRENT_USER?.id || null };
  const { data, error } = await supabase.from('holidays').upsert(body).select();
  if(error) throw error;
  const row = data?.[0];
  await logAction(hol.id ? 'update':'insert','holiday', row?.id, { row });
  return row;
}
async function deleteHoliday(idNum){
  const { error } = await supabase.from('holidays').delete().eq('id', idNum);
  if(error) throw error;
  await logAction('delete','holiday', idNum, {});
}

// ---------- STORAGE ----------
async function uploadAttachment(file, path){
  const { error } = await supabase.storage.from('holiday-files').upload(path, file, { upsert: true });
  if(error) throw error;
  const { data: pub } = await supabase.storage.from('holiday-files').getPublicUrl(path);
  return pub.publicUrl;
}

// ---------- UI HELPERS ----------
function makeAutocomplete(input, panel, fetchFn, onPick){
  function close(){ input.parentElement.classList.remove('open'); panel.innerHTML=''; }
  input.addEventListener('input', async ()=>{
    const q = input.value.trim();
    const items = q ? await fetchFn(q) : [];
    panel.innerHTML = items.slice(0,30).map(it=> `<div class="ac-item" data-id="${it.id}">${it.full_name} (${it.code||''})</div>`).join('');
    if(items.length){ input.parentElement.classList.add('open'); } else close();
  });
  panel.addEventListener('click', (e)=>{
    const item = e.target.closest('.ac-item'); if(!item) return;
    onPick(parseInt(item.dataset.id,10)); close();
  });
  document.addEventListener('click', (e)=>{ if(!input.parentElement.contains(e.target)) close(); });
}
async function resolveEmployeeQuery(q){
  q = (q||'').trim();
  if(!q) return null;
  const list = await listEmployees(q);
  if(list.length===1) return list[0].id;
  const exact = list.find(e=> (e.code||'').toLowerCase()===q.toLowerCase());
  return exact ? exact.id : null;
}

// ---------- Employees page ----------
async function bindEmployees(){
  id('btnAddEmp').addEventListener('click', ()=> openEmpDrawer());
  id('empSearch').addEventListener('input', renderEmployees);
  await renderEmployees();
}
async function renderEmployees(){
  const q = id('empSearch').value?.trim()||'';
  const emps = await listEmployees(q);
  EMP_CACHE = new Map(emps.map(e=>[e.id,e]));
  const tb = id('tblEmployees').querySelector('tbody'); tb.innerHTML='';
  for(const e of emps){
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${e.code||''}</td><td>${e.full_name||''}</td><td>${e.city||''}</td><td>${e.department||''}</td><td>${e.updated_by_username||''}</td>
      <td><button data-act="edit" data-id="${e.id}">${t('btn_edit')}</button> <button data-act="del" data-id="${e.id}">${t('btn_delete')}</button></td>`;
    tb.appendChild(tr);
  }
  tb.querySelectorAll('button[data-act]').forEach(btn=>{
    const idNum = parseInt(btn.dataset.id,10);
    btn.addEventListener('click', async ()=>{
      const e = EMP_CACHE.get(idNum); if(!e) return;
      if(btn.dataset.act==='edit') openEmpDrawer(e);
      else { if(confirm(t('a_confirm_delete'))){ await deleteEmployee(idNum); await renderEmployees(); await renderHolidays(); } }
    });
  });
}

function _optHtml(arr, current){
  let html = '<option value=""></option>';
  const set = new Set(arr); arr.forEach(v=> html += `<option value="${v}" ${(current===v)?'selected':''}>${v}</option>`);
  if(current && !set.has(current)){ html = '<option value=""></option>' + `<option value="${current}" selected>${current}</option>` + arr.map(v=>`<option value="${v}">${v}</option>`).join(''); }
  return html;
}
const CITY_OPTIONS = ["مكة","جدة","جازان","الرياض","ابها","الأحساء","المدينة المنورة","الدمام","القصيم","حائل","عرعر","خميس مشيط","نجران","حفر الباطن","الاحساء","ينبع","الطائف","تبوك","الباحة","محلات السعودية","الظهران","الشرقية"];
const DEPT_OPTIONS = ["الأندلس مول","الاحساء مول","الحياة مول","الحجاز مول","الحمرا مول","الدانة مول","الراشد مول","الرياض بارك","الرياض غاليري","السلام مول","الظهران مول","العثيم مول","العرب مول","العالية","العالية بلازا","العالية مول","الغاليري","الكادي مول","المطل","النخيل بلازا","النخيل مول","الياسمين مول","ابراج البيت","الباحة مول","البوفيه","التشغيل","التسعير","التصميم","التصميم والتصوير","العلاقات العامة","الموارد البشرية","المستودع","النظافة","الورشة","بارك افينيو","تبوك بارك","تقنية المعلومات","جراند مول","جميرا","جميرا مكة","حياة ريجنسي","دار التقوى","ذا بارك","سكرتارية","سفلي","صيانة","صيانة كهرباء + ديكور","عزيز مول","علوي","علوي 2","عامل نظافة","فاترينة دار الايمان","فيلا - قباء","قراند مول","كونراد","لايف ستايل","لافاندا بارك","مكة أبيات","مكة المكرمة - محلات","مكة مول","مكة علوي","مكة سفلي","مدخل بيانات","مدير علاقات عامة","مسؤول اداري","مشرف تشغيل","مصمم جرافيك","موفنبيك - البرج","موجان بارك","نجران بارك","هيلتون","خدمة عملاء","هيلتون مكة"];

function openEmpDrawer(emp=null){
  id('drawerTitle').textContent = emp ? t('drawer_edit_emp') : t('drawer_add_emp');
  const b = id('drawerBody');
  const city = emp?.city || '';
  const dept = emp?.department || '';

  b.innerHTML = `
    <div class="form-section">
      <div class="row">
        <label>${t('fld_code')} <input id="e_code" value="${emp?.code || ''}"></label>
        <label>${t('fld_name')} <input id="e_name" value="${emp?.full_name || ''}"></label>
        <label>${t('fld_city')} <select id="e_city_sel">${_optHtml(CITY_OPTIONS, city)}</select></label>
        <label>${t('fld_dept')} <select id="e_dept_sel">${_optHtml(DEPT_OPTIONS, dept)}</select></label>
      </div>
    </div>`;

  b.insertAdjacentHTML('beforeend', `
    <div class="form-section">
      <h4>${t('fld_notes')}</h4>
      <label>
        <textarea id="e_notes" rows="4" placeholder="اكتب ملاحظات داخلية أو تذكيرات">${emp?.notes || ''}</textarea>
      </label>
      <p class="small">${t('notes_hint')}</p>
    </div>
  `);

  openDrawer(async close => {
    const o = {
      id: emp?.id,
      code: id('e_code').value.trim(),
      full_name: id('e_name').value.trim(),
      city: id('e_city_sel').value,
      department: id('e_dept_sel').value,
      notes: id('e_notes').value.trim() || null
    };

    if (!o.code || !o.full_name) {
      alert(t('a_code_name_required'));
      return;
    }

    await upsertEmployee(o);
    toast(t('t_saved'));
    await renderEmployees();
    await renderHolidays();
    close();
  });
}

// ---------- Holidays page ----------
let holSelectedEmpId = null;
function makeChip(show){
  const box = id('holSelectedCard');
  if(!show || !holSelectedEmpId){ box.hidden = true; box.innerHTML=''; return; }
  const emp = EMP_CACHE.get(holSelectedEmpId);
  if(!emp){ box.hidden = true; box.innerHTML=''; return; }
  box.innerHTML = `<div class="emp-main">${emp.full_name} (${emp.code||''})</div><div class="emp-sub">${emp.department||''} • ${emp.city||''}</div>`;
  box.hidden = false;
}
async function bindHolidays(){
  makeAutocomplete(id('holEmpSearch'), id('holEmpList'), listEmployees, (idPicked)=>{
    holSelectedEmpId = idPicked; id('holEmpSearch').value=''; id('btnAddHol').disabled=false; toast(t('t_emp_picked')); makeChip(true); renderHolidays();
  });
  id('holEmpSearch').addEventListener('keydown', async (ev)=>{
    if(ev.key==='Enter'){
      ev.preventDefault();
      const idResolved = await resolveEmployeeQuery(id('holEmpSearch').value);
      if(idResolved){ holSelectedEmpId = idResolved; id('holEmpSearch').value=''; id('btnAddHol').disabled=false; toast(t('t_emp_picked')); makeChip(true); renderHolidays(); }
      else toast(t('t_emp_not_found'));
    }
  });
  id('btnClearHolEmp').addEventListener('click', ()=>{ holSelectedEmpId=null; id('holEmpSearch').value=''; id('btnAddHol').disabled=true; makeChip(false); renderHolidays(); });
  id('btnAddHol').addEventListener('click', ()=> openHolDrawer());
  await renderHolidays();
}
async function renderHolidays(){
  const hols = await listHolidays({ employee_id: holSelectedEmpId||undefined });
  const tb = id('tblHolidays').querySelector('tbody'); tb.innerHTML='';
  for(const h of hols){
    const e = EMP_CACHE.get(h.employee_id) || (await listEmployees()).find(x=>x.id===h.employee_id);
    if(e) EMP_CACHE.set(e.id, e);
    const files = [h.file_url, h.file2_url].filter(Boolean).map((u,i)=> `<a class="link" href="${u}" target="_blank">${t('file_n')} ${i+1}</a>`).join('<br>');
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${e?e.full_name:''}</td><td>${h.start_g}</td><td>${h.end_g}</td><td>${h.start_h||''}</td><td>${h.end_h||''}</td><td>${h.type||''}</td><td>${h.reason||''}</td><td>${files}</td><td>${h.duration||calcDays(h.start_g,h.end_g)}</td><td>${h.updated_by_username||''}</td>
      <td><button data-act="edit" data-id="${h.id}">${t('btn_edit')}</button> <button data-act="del" data-id="${h.id}">${t('btn_delete')}</button></td>`;
    tb.appendChild(tr);
  }
  tb.querySelectorAll('button[data-act]').forEach(btn=>{
    const idNum = parseInt(btn.dataset.id,10);
    btn.addEventListener('click', async ()=>{
      if(btn.dataset.act==='edit'){
        const { data } = await supabase.from('holidays').select('*').eq('id', idNum).single();
        if(data) openHolDrawer(data);
      }else{
        if(confirm(t('a_confirm_delete'))){ await deleteHoliday(idNum); await renderHolidays(); await renderOverview(); }
      }
    });
  });
}
function normDate(v){ v=(v||'').trim(); const m=v.match(/^(\d{2})\/(\d{2})\/(\d{4})$/); return m?`${m[3]}-${m[2]}-${m[1]}`:v; }
function openHolDrawer(rec=null){
  id('drawerTitle').textContent = rec ? t('drawer_edit_hol') : t('drawer_add_hol');
  const emps = Array.from(EMP_CACHE.values()).sort((a,b)=> a.full_name.localeCompare(b.full_name));
  const defaultEmpId = rec?.employee_id || holSelectedEmpId || (emps[0]?.id||'');
  const empOptions = emps.map(e=>`<option value="${e.id}" ${(e.id===defaultEmpId)?'selected':''}>${e.full_name} (${e.code||''})</option>`).join('');
  const b = id('drawerBody');
  b.innerHTML = `
    <div class="form-section">
      <h4>${t('fld_emp')}</h4>
      <label>${t('fld_select_emp')} <select id="h_emp">${empOptions}</select></label>
    </div>
    <div class="form-section"><h4>${t('fld_dates_g')}</h4>
      <div class="row">
        <label>${t('fld_start_g')} <input id="h_start_g" type="date" value="${rec?.start_g||''}"></label>
        <label>${t('fld_end_g')} <input id="h_end_g" type="date" value="${rec?.end_g||''}"></label>
      </div>
    </div>
    <div class="form-section"><h4>${t('fld_dates_h')}</h4>
      <div class="row">
        <label>${t('fld_start_h')} <input id="h_start_h" value="${rec?.start_h||''}" placeholder="01/12/1447"></label>
        <label>${t('fld_end_h')} <input id="h_end_h" value="${rec?.end_h||''}" placeholder="05/12/1447"></label>
      </div>
    </div>
    <div class="form-section"><h4>${t('fld_hol_details')}</h4>
      <div class="row">
        <label>${t('fld_type')} <input id="h_type" value="${rec?.type||''}" placeholder="${t('ph_type')}"></label>
        <label>${t('fld_reason')} <input id="h_reason" value="${rec?.reason||''}" placeholder="${t('ph_reason')}"></label>
      </div>
    </div>
    <div class="form-section"><h4>${t('fld_attach')}</h4><label>${t('fld_file')} <input id="h_file" type="file"></label></div>
    <div class="form-section"><h4>${t('fld_attach2')}</h4><label>${t('fld_file2')} <input id="h_file2" type="file"></label></div>
  `;
  openDrawer(async close => {
    const empId = parseInt(id('h_emp').value,10);
    const start_g = normDate(id('h_start_g').value);
    const end_g   = normDate(id('h_end_g').value);
    const start_h = id('h_start_h').value.trim();
    const end_h   = id('h_end_h').value.trim();
    const typ     = id('h_type').value.trim();
    const reas    = id('h_reason').value.trim();
    if(!empId) return alert(t('a_pick_emp'));
    if(!start_g || !end_g) return alert(t('a_enter_g_dates'));
    if(!start_h || !end_h) return alert(t('a_enter_h_dates'));
    if(!typ || !reas) return alert(t('a_type_reason_required'));
    if(end_g < start_g) return alert(t('a_end_after_start'));
    const hol = { id: rec?.id, employee_id: empId, start_g, end_g, start_h, end_h, type: typ, reason: reas, duration: calcDays(start_g,end_g) };
    const f1 = id('h_file').files[0]; const f2 = id('h_file2').files[0];
    const nowKey = Date.now();
    try{
      if(f1){ hol.file_url = await uploadAttachment(f1, `${empId}/${nowKey}_1_${f1.name}`); }
      if(f2){ hol.file2_url = await uploadAttachment(f2, `${empId}/${nowKey}_2_${f2.name}`); }
      await upsertHoliday(hol);
      toast(t('t_saved')); await renderHolidays(); await renderOverview(); close();
    }catch(err){ console.error(err); alert(t('a_save_error')+(err.message||err)); }
  });
}

// ---------- Overview ----------
async function bindOverview(){
  const now = new Date(); id('ovYear').value = now.getFullYear();
  id('refreshOverview').addEventListener('click', renderOverview);
  await renderOverview();
}
async function renderOverview(){
  const yearVal = parseInt(id('ovYear').value|| (new Date()).getFullYear(),10);
  const yStart = `${yearVal}-01-01`, yEnd = `${yearVal}-12-31`;
  const hols = await listHolidays({ from: yStart, to: yEnd });
  const emps = await listEmployees(); EMP_CACHE = new Map(emps.map(e=>[e.id,e]));
  const empById = id => EMP_CACHE.get(id);
  const yBody = id('tblYearlyDetails').querySelector('tbody'); yBody.innerHTML='';
  hols.sort((a,b)=> a.start_g.localeCompare(b.start_g)).forEach(h=>{
    const e = empById(h.employee_id); if(!e) return;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${e.full_name}</td><td>${h.start_g}</td><td>${h.end_g}</td><td>${h.duration||calcDays(h.start_g,h.end_g)}</td><td>${h.type||''}</td><td>${h.reason||''}</td>`;
    yBody.appendChild(tr);
  });
  const totals = {}; hols.forEach(h=>{ const n = empById(h.employee_id)?.full_name; if(!n) return; totals[n] = (totals[n]||0) + (h.duration||calcDays(h.start_g,h.end_g)); });
  const tBody = id('tblYearlyTotals').querySelector('tbody'); tBody.innerHTML='';
  Object.entries(totals).sort((a,b)=> a[0].localeCompare(b[0])).forEach(([n,d])=>{ const tr=document.createElement('tr'); tr.innerHTML=`<td>${n}</td><td>${d}</td>`; tBody.appendChild(tr); });
  const month = (new Date()).toISOString().slice(0,7);
  const mBody = id('tblMonthlyDetails').querySelector('tbody'); mBody.innerHTML='';
  hols.filter(h=> (h.start_g||'').startsWith(month)).forEach(h=>{
    const e = empById(h.employee_id); if(!e) return;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${e.full_name}</td><td>${h.start_g}</td><td>${h.end_g}</td><td>${h.duration||calcDays(h.start_g,h.end_g)}</td><td>${h.type||''}</td><td>${h.reason||''}</td>`;
    mBody.appendChild(tr);
  });
}

// ---------- Reports ----------
let repSelectedEmpId = null, repAll = false;
async function bindReports(){
  const now = new Date();
  id('rStart').value = `${now.getFullYear()}-01-01`; id('rEnd').value = `${now.getFullYear()}-12-31`;
  makeAutocomplete(id('rEmpSearch'), id('rEmpList'), listEmployees, (idPicked)=>{
    repSelectedEmpId = idPicked; repAll=false; id('rEmpSearch').value=''; toast(t('t_report_emp')); runReport();
  });
  id('rEmpSearch').addEventListener('keydown', async (ev)=>{
    if(ev.key==='Enter'){ ev.preventDefault(); const idResolved = await resolveEmployeeQuery(id('rEmpSearch').value); if(idResolved){ repSelectedEmpId=idResolved; repAll=false; id('rEmpSearch').value=''; runReport(); } }
  });
  id('btnClearRepEmp').addEventListener('click', ()=>{ repSelectedEmpId=null; repAll=false; id('rEmpSearch').value=''; runReport(); });
  id('btnAllEmployees').addEventListener('click', ()=>{ repAll=true; repSelectedEmpId=null; id('rEmpSearch').value=''; toast(t('t_all_emps')); runReport(); });
  id('btnRunReport').addEventListener('click', runReport);
  id('btnPrint').addEventListener('click', ()=> window.print());
  id('btnExportXLS').addEventListener('click', exportReportExcel);
  await runReport();
}

function exportReportExcel() {
  const table = document.getElementById('tblReport');
  if (!table) { alert('Report table not found.'); return; }
  const body = table.tBodies[0];
  if (!body || body.rows.length === 0) { alert('No data to export.'); return; }

  const title = (document.getElementById('repTitle')?.textContent || 'Report').trim();
  const start = document.getElementById('rStart')?.value || '';
  const end   = document.getElementById('rEnd')?.value || '';
  const rangeText = (start && end) ? ` (${start}→${end})` : '';

  const html =
`<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40" lang="${currentLang}" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { direction: rtl; font-family: Arial, "Segoe UI", Tahoma, sans-serif; }
    table { border-collapse: collapse; }
    th, td { border: 1px solid #999; padding: 4px 6px; white-space: nowrap; }
    thead th { font-weight: bold; }
  </style>
</head>
<body>
  <h2>${escapeHtml(title)}${escapeHtml(rangeText)}</h2>
  ${table.outerHTML}
  <p style="margin-top:10px"><b>${escapeHtml(t('totals_days'))}</b> ${escapeHtml(document.getElementById('repTotal')?.textContent || '0')}</p>
</body>
</html>`;

  const blob = new Blob(['\ufeff', html], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  const safeName = (title || 'report').replace(/[\\/:*?"<>|]+/g, '_');
  a.href = url;
  a.download = `${safeName}${rangeText ? '_' + rangeText.replace(/[()→\s]/g,'') : ''}.xls`;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 0);
}
function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
                  .replace(/>/g,'&gt;').replace(/"/g,'&quot;')
                  .replace(/'/g,'&#39;');
}

async function runReport(){
  const sVal = id('rStart').value; const eVal = id('rEnd').value;
  const tb = id('tblReport').querySelector('tbody'); tb.innerHTML='';

  if(repAll){
    const hols = await listHolidays({ from: sVal, to: eVal });
    const emps = await listEmployees(); const map = new Map(emps.map(e=>[e.id,e]));
    const rows = [];

    hols.forEach(h=>{
      const e = map.get(h.employee_id); if(!e) return;
      rows.push({
        code: e.code || '',
        name: e.full_name || '',
        city: e.city || '',
        dept: e.department || '',
        start: h.start_g,
        end:   h.end_g,
        start_h: h.start_h || '',
        end_h:   h.end_h   || '',
        days: h.duration || calcDays(h.start_g, h.end_g),
        type: h.type || '',
        reason: h.reason || '',
        by: h.updated_by_username || ''
      });
    });

    rows.sort((a,b)=> a.name.localeCompare(b.name) || a.start.localeCompare(b.start));

    let total = 0;
    rows.forEach(r=>{
      total += r.days;
      const tr = document.createElement('tr');
      tr.innerHTML =
        `<td>${r.code}</td><td>${r.name}</td><td>${r.city}</td><td>${r.dept}</td>` +
        `<td>${r.start}</td><td>${r.end}</td>` +
        `<td>${r.start_h}</td><td>${r.end_h}</td>` +
        `<td>${r.days}</td><td>${r.type}</td><td>${r.reason}</td><td>${r.by}</td>`;
      tb.appendChild(tr);
    });

    id('repTotal').textContent = total;
    id('repTitle').textContent = `${t('rep_all_emp_prefix')} | ${t('rep_period')}: ${sVal||'—'} → ${eVal||'—'}`;
    if(rows.length===0) alert(t('a_no_holidays_range'));
    return;
  }

  if(!repSelectedEmpId){
    id('repTitle').textContent = `${t('h3_report_results')} | ${t('rep_period')}: ${sVal||'—'} → ${eVal||'—'}`;
    return;
  }

  const [hols, emps] = await Promise.all([
    listHolidays({ employee_id: repSelectedEmpId, from: sVal, to: eVal }),
    listEmployees()
  ]);
  const emp = emps.find(e=> e.id===repSelectedEmpId);
  if(!emp){ id('repTitle').textContent=t('a_emp_not_found'); return; }

  let total = 0;
  hols.sort((a,b)=> a.start_g.localeCompare(b.start_g)).forEach(h=>{
    total += (h.duration||calcDays(h.start_g,h.end_g));
    const tr = document.createElement('tr');
    tr.innerHTML =
      `<td>${emp.code||''}</td><td>${emp.full_name||''}</td><td>${emp.city||''}</td><td>${emp.department||''}</td>` +
      `<td>${h.start_g}</td><td>${h.end_g}</td>` +
      `<td>${h.start_h||''}</td><td>${h.end_h||''}</td>` +
      `<td>${h.duration||calcDays(h.start_g,h.end_g)}</td><td>${h.type||''}</td><td>${h.reason||''}</td><td>${h.updated_by_username||''}</td>`;
    tb.appendChild(tr);
  });

  id('repTotal').textContent = total;
  id('repTitle').textContent = `${emp.full_name} (${emp.code||''}) | ${t('rep_period')}: ${sVal||'—'} → ${eVal||'—'}`;
  if(hols.length===0) alert(t('a_no_emp_holidays'));
}

// ---------- Activity / Audit ----------
async function bindActivity(){
  id('btnLoadAudit').addEventListener('click', renderAudit);
  await renderAudit();
}

async function renderAudit(){
  const ent = id('aEntity').value; 
  const from = id('aFrom').value; 
  const to = id('aTo').value; 
  const uname = id('aUser').value.trim();
  
  let query = supabase.from('audit_logs_with_user').select('*').order('at',{ascending:false}).limit(1000);
  if(ent) query = query.eq('entity', ent);
  if(from) query = query.gte('at', from);
  if(to)   query = query.lte('at', to+' 23:59:59');
  if(uname) query = query.ilike('username', `%${uname}%`);
  
  const { data, error } = await query;
  if(error){ console.error(error); return; }
  
  const tb = id('tblAudit').querySelector('tbody'); 
  tb.innerHTML='';
  
  for(const r of data){
    let readableDetails = '';
    
    // Extract the record data from the JSON payload
    const record = r.payload?.row || r.payload || {};
    const userName = r.username || t('audit_unknown_user');
    
    // Helper to get the employee's actual name based on their ID
    const getEmpName = (empId) => {
      const emp = EMP_CACHE.get(empId);
      return emp ? emp.full_name : t('audit_unknown_emp').replace('{id}', empId);
    };

    // Generate human-readable text based on Action and Entity
    if (r.action === 'insert') {
      if (r.entity === 'employee') {
        readableDetails = t('audit_added_emp').replace('{name}', record.full_name || record.code || '');
      } else if (r.entity === 'holiday') {
        readableDetails = t('audit_added_hol')
          .replace('{name}', getEmpName(record.employee_id))
          .replace('{start}', record.start_g || '')
          .replace('{end}', record.end_g || '');
      }
    } 
    else if (r.action === 'update') {
      if (r.entity === 'employee') {
        readableDetails = t('audit_updated_emp').replace('{name}', record.full_name || record.code || '');
      } else if (r.entity === 'holiday') {
        readableDetails = t('audit_updated_hol').replace('{name}', getEmpName(record.employee_id));
      }
    } 
    else if (r.action === 'delete') {
      if (r.entity === 'employee') {
        readableDetails = t('audit_deleted_emp').replace('{id}', r.entity_id);
      } else if (r.entity === 'holiday') {
        readableDetails = t('audit_deleted_hol').replace('{id}', r.entity_id);
      }
    } 
    else {
      readableDetails = t('audit_unknown_action')
        .replace('{action}', r.action)
        .replace('{entity}', r.entity)
        .replace('{id}', r.entity_id || '');
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${new Date(r.at).toLocaleString()}</td>
      <td><b>${userName}</b></td>
      <td>${r.action.toUpperCase()}</td>
      <td>${r.entity}</td>
      <td>${r.entity_id || ''}</td>
      <td><span style="color: #0f172a; font-weight: 500;">${readableDetails}</span></td>
    `;
    tb.appendChild(tr);
  }
}

// ---------- Drawer & Nav ----------
function openDrawer(onSave){
  const dr = id('drawer'); dr.classList.add('show'); dr.setAttribute('aria-hidden','false');
  const saveBtn = id('btnSaveDrawer'), cancelBtn = id('btnCancelDrawer'), closeBtn = id('closeDrawer');
  function close(){ dr.classList.remove('show'); dr.setAttribute('aria-hidden','true');
    id('btnSaveDrawer').replaceWith(saveBtn.cloneNode(true));
    id('btnCancelDrawer').replaceWith(cancelBtn.cloneNode(true));
    id('closeDrawer').replaceWith(closeBtn.cloneNode(true));
  }
  id('btnCancelDrawer').addEventListener('click', close);
  id('closeDrawer').addEventListener('click', close);
  id('btnSaveDrawer').addEventListener('click', ()=> onSave(close));
}

// ---------- Auth UI bind ----------
function bindAuthUI(){
  const tabs = qsAll('.tab');
  tabs.forEach(t=> t.addEventListener('click', ()=>{
    tabs.forEach(x=> x.classList.remove('active'));
    t.classList.add('active');
    id('tab-signin').hidden = t.dataset.tab!=='signin';
    id('tab-signup').hidden = t.dataset.tab!=='signup';
  }));
  id('btnSignIn').addEventListener('click', async ()=>{
    try{ await signIn(id('siEmail').value, id('siPass').value); loadApp(); }catch(e){ alert(e.message); }
  });
  id('btnSignUp').addEventListener('click', async ()=>{
    try{ await signUp(id('suUser').value.trim(), id('suEmail').value, id('suPass').value); loadApp(); }catch(e){ alert(e.message); }
  });
  id('btnSignOut').addEventListener('click', async ()=>{
    await supabase.auth.signOut(); CURRENT_USER=null; showView('auth'); qsAll('.navbar, .topbar').forEach(el=> el.style.pointerEvents='none'); await refreshUser(); toast(t('t_signed_out'));
  });
}

// ---------- Language toggle ----------
function bindLangToggle(){
  id('langToggle').addEventListener('click', ()=>{
    // Switch language
    currentLang = (currentLang === 'ar') ? 'en' : 'ar';

    // Translate static HTML
    applyTranslations();

    // Re-render dynamic content so tables, dropdowns, etc. update too
    renderEmployees();
    renderHolidays();
    renderOverview();
    runReport();
    renderAudit();

    toast(currentLang === 'ar' ? t('t_lang_ar') : t('t_lang_en'));
  });
}

// ---------- App Init ----------
async function loadApp(){
  await refreshUser();
  if(!CURRENT_USER){ showView('auth'); return; }
  showView('overview');
  await Promise.all([ bindEmployees(), bindHolidays(), bindOverview(), bindReports(), bindActivity() ]);
  toast(t('t_ready'));
}

document.addEventListener('DOMContentLoaded', async ()=>{
  // Apply initial translations (Arabic by default)
  applyTranslations();

  // Nav
  qsAll('.navbar button[data-view]').forEach(btn=> btn.addEventListener('click', ()=> {
    const v = btn.dataset.view;
    const map = { file:'export', saved:'saved', tools:'tools' };
    showView(map[v]||v);
  }));

  bindLangToggle();

  // Disable nav before auth
  qsAll('.navbar, .topbar').forEach(el=> el.style.pointerEvents = 'none');

  bindAuthUI();
  await loadApp();
});