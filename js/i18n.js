/**
 * Internationalization (i18n) Module for Irtaqi
 * Supports: Arabic (ar - default, RTL), English (en - LTR), Italian (it - LTR)
 * Translates application UI while preserving authentic Quranic Arabic text.
 */

const I18N_STORAGE_KEY = 'qrn_app_lang';

const I18N_DICTIONARY = {
  ar: {
    // Header
    brand_title: "إرتَقِ بالقرآن",
    page_count_badge: "604 صفحة",
    scroll_top_title: "العودة لأعلى الصفحة",
    tamkeen: "تمكين",
    tamkeen_title: "اختبار وتثبيت الحفظ (تمكين)",
    install: "تثبيت",
    install_title: "تثبيت التطبيق على الشاشة الرئيسية",
    share_card: "بطاقة الإنجاز",
    share_card_title: "عرض بطاقة الإنجاز",
    mistakes_notebook: "دفتر التثبيت",
    mistakes_title: "دفتر التثبيت وسجل الأخطاء",
    about_app: "عن التطبيق",
    about_app_title: "عن التطبيق ودليل المستخدم",
    reminders_title: "منبه ورد الحفظ والمراجعة",
    theme_toggle_title: "تبديل النمط",

    // Banners
    tutorial_title: "مرحباً بك في «إرتَقِ»! هل ترغب في جولة سريعة للتعرف على التطبيق؟",
    tutorial_badge: "دليل الواجهة",
    tutorial_desc: "شرح تفاعلي مبسط في دقيقة واحدة لجميع الأزرار والخيارات وميزات الحفظ والمراجعة لتبدأ بسهولة.",
    start_tour: "بدء الجولة التعريفية",
    skip_tour: "تخطي",
    prev: "السابق",
    next: "التالي",
    finish_tour: "إنهاء الجولة ✨",
    install_banner_title: "تثبيت تطبيق إرتَقِ على جهازك",
    install_banner_badge: "تطبيق متقدم PWA",
    install_banner_desc: "يمكنك تثبيت التطبيق للوصول السريع والعمل بدون إنترنت وحفظ تقدمك بكل سهولة.",
    install_now: "تثبيت الآن",

    // Overview Stats
    total_progress_badge: "إجمالي إنجاز الحفظ في المصحف الشريف",
    total_percent_label: "نسبة الحفظ الكلية",
    completion_track_label: "المسار المقطوع نحو ختم القرآن حفظاً",
    remaining_prefix: "باقي",
    hero_tamkeen_btn: "تمكين | اختبر حفظك الآن",
    hero_card_btn: "عرض بطاقة وشهادة الإنجاز",
    stat_pages_label: "الصفحات المحفوظة",
    stat_surahs_label: "السور المكتملة",
    stat_juz_label: "الأجزاء المكتملة",
    stat_ayahs_label: "الآيات التقريبية",
    good_tidings_title: "بُشرى لحامل القرآن",
    hadith_source: "— رواه الترمذي وأبو داود",
    reset_history: "تصفير السجل",
    backup_restore: "نسخ احتياطي واستعادة",

    // Navigation Tabs
    tab_by_surah: "السور",
    tab_by_surah_full: "حسب السور",
    tab_by_page: "الصفحات",
    tab_by_page_full: "شبكة الصفحات",
    tab_by_juz: "الأجزاء",
    tab_tamkeen: "تمكين",
    tab_tamkeen_sub: "(اختبار)",

    // Search and Filters
    search_placeholder: "ابحث باسم السورة، رقمها، الصفحة...",
    filter_show_all: "عرض الكل",
    filter_memorized_only: "المحفوظ فقط",
    filter_unmemorized_only: "غير المحفوظ",
    showing_surahs_prefix: "عرض",
    surah_unit: "سورة",
    surah_hint: "اضغط على بطاقة السورة لتصفحها في المصحف وتحديد إتمامها",
    pages_grid_title: "شبكة مصحف المدينة المنورة (604 صفحة)",
    pages_grid_desc: "اضغط على رقم الصفحة للتبديل بين (محفوظ / غير محفوظ).",
    filter_btn_all: "الكل",
    filter_btn_memorized: "المحفوظ",
    filter_btn_unmemorized: "غير المحفوظ",

    // Range Selector
    range_title: "تحديد نطاق صفحات دفعة واحدة:",
    range_from: "من ص:",
    range_to: "إلى ص:",
    range_save_btn: "حفظ النطاق",
    range_clear_btn: "إلغاء النطاق",
    range_test_btn: "اختبرني في النطاق",

    // Tamkeen Quiz Section
    tamkeen_heading: "تَمْكِين | اختبار وتثبيت حفظ القرآن",
    tamkeen_subheading: "قِس متانة حفظك ورسوخ الآيات عبر 3 أنماط اختبارية ذكية",
    interactive_badge: "تفاعلي",
    questions_stat: "الأسئلة",
    correct_stat: "الصحيحة",
    accuracy_stat: "الدقة",
    streak_stat: "التتابع",
    reset_btn: "تصفير",
    mode_all: "شامل",
    mode_next_ayah: "الآية التالية",
    mode_surah_id: "تحديد السورة",
    scope_label: "نطاق الأسئلة:",
    scope_all: "جميع سور القرآن الكريم",
    scope_memorized_pages: "الصفحات التي حفظتها فقط",
    scope_memorized_surahs: "السور المكتملة حفظاً فقط",
    scope_surah_range: "نطاق سور محدد (من سورة إلى سورة)",
    scope_page_range: "نطاق صفحات محدد (من صفحة إلى صفحة)",
    scope_juz_range: "نطاق أجزاء محدد (من جزء إلى جزء)",
    tamkeen_loading: "جاري استدعاء وتوليد سؤال جديد تلقائياً...",
    reveal_options: "كشف خيارات الإجابة",
    recall_first: "استحضر الآية في صدرك غيباً أولاً",
    next_question: "السؤال التالي",
    another_question: "سؤال آخر",
    question_next_ayah_prompt: "ما هي الآية الكريمة التالية؟",
    question_surah_id_prompt: "في أي سورة كريمة وردت هذه الآية؟",
    tamkeen_correct: "إجابة صحيحة، ما شاء الله!",
    tamkeen_wrong: "إجابة غير صحيحة، أضيفت لدفتر التثبيت",

    // Common Terms & Cards
    meccan: "مكية",
    medinan: "مدنية",
    ayah: "آية",
    ayahs: "آيات",
    page: "صفحة",
    pages: "صفحات",
    p_short: "ص",
    juz: "الجزء",
    hizb: "الحزب",
    second_half: "النصف الثاني",
    completed: "مكتملة",
    in_progress: "قيد الحفظ",
    mushaf: "المصحف",
    test_me: "اختبرني",
    precise_ayahs: "آيات محفوظة بدقة:",
    no_results_found: "لم نجد نتائج تطابق بحثك أو عامل التصفية المحدد",
    close: "إغلاق",
    save: "حفظ",
    cancel: "إلغاء",
    confirm: "تأكيد",
    mark_all_juz: "حفظ الجزء كاملاً",
    unmark_all_juz: "إلغاء حفظ الجزء",
    test_juz: "اختبار الجزء في تمكين",
    browse_surah_title: "اضغط لتصفح السورة في المصحف",
    toggle_surah_done: "تحديد السورة كمكتملة الحفظ",
    toggle_surah_undone: "إلغاء إتمام السورة (استعادة الصفحات السابقة)",

    // Daily Ward (SRS)
    daily_ward_title: "الورد اليومي المقترح للمراجعة والحفظ",
    daily_ward_desc: "جدول ذكي مبني على التكرار المتباعد لتثبيت الحفظ ومنع التفلت",
    all_caught_up: "أحسنت! لا يوجد ورد متأخر للمراجعة اليوم.",
    review_quality_excellent: "ممتاز (28 يوماً)",
    review_quality_medium: "متوسط (14 يوماً)",
    review_quality_needs_work: "يحتاج تثبيت (4 أيام)",
    mark_reviewed: "تسجيل المراجعة",

    // Commitment Streak
    streak_title: "شعلة الالتزام ورصيد التعويض",
    days_streak: "أيام متتالية",
    compensation_credit: "رصيد أيام التعويض",

    // Mobile Bottom Navigation
    mobile_surahs: "السور",
    mobile_pages: "الصفحات",
    mobile_ajza: "الأجزاء",
    mobile_tamkeen: "تَمْكِين",

    // Modals
    mistakes_notebook_heading: "دفتر التثبيت وسجل الأخطاء",
    mistakes_notebook_sub: "الآيات التي تحتاج عناية وتكراراً من اختبارات تمكين",
    mistakes_footer_hint: "يتحدث تلقائياً مع كل خطأ في اختبارات تمكين",
    clear_mistakes: "مسح السجل",
    retest: "إعادة الاختبار",
    mastered: "تم التثبيت ✓",
    mistakes_empty: "دفتر التثبيت فارغ! حفظك متقن ومثبت بفضل الله.",
    mistakes_empty_title: "ما شاء الله تبارك الله!",
    correct_answer_label: "الإجابة الصحيحة:",
    your_previous_answer_label: "إجابتك السابقة:",
    retest_now: "إعادة الاختبار الآن",
    mastered_done: "تم الإتقان والتثبيت ✓",
    surah_prefix: "سورة ",
    repeated_times: "تكرر",
    start_tamkeen_quiz_btn: "ابدأ اختبار تمكين الآن",

    exit_confirm_title: "الخروج من التطبيق؟",
    exit_confirm_desc: "هل تريد مغادرة الصفحة؟ بيانات حفظك محفوظة على جهازك.",
    exit_stay: "البقاء",
    exit_leave: "خروج",

    reset_modal_title: "تصفير جميع بيانات الحفظ؟",
    reset_modal_desc: "سيتم حذف تقدمك وسجلات المراجعة بالكامل. لا يمكن التراجع عن هذا الإجراء.",
    reset_confirm_btn: "نعم، تصفير السجل",
    reset_cancel_btn: "إلغاء",

    reset_tamkeen_title: "تصفير نتائج واختبارات تمكين؟",
    reset_tamkeen_desc: "سيتم إعادة تعيين عدادات الأسئلة والصحيحة والدقة وسلسلة التتابع إلى الصفر.",
    reset_tamkeen_confirm: "نعم، تصفير النتائج",

    backup_modal_title: "النسخ الاحتياطي ونقل البيانات",
    backup_modal_sub: "حفظ ونقل بيانات حفظك بأمان",
    backup_modal_desc: "بياناتك محفوظة تلقائياً في ذاكرة المتصفح. لنقل تقدمك لهاتف آخر، قم بتصدير ملف النسخة واسترجاعه في أي وقت.",
    export_json_btn: "تصدير ملف النسخة",
    import_json_btn: "استيراد ملف",
    json_label: "بيانات الحفظ بصيغة JSON:",
    copy_json_btn: "نسخ الكود إلى الحافظة",

    reminders_modal_title: "منبه ورد الحفظ والمراجعة",
    reminders_modal_sub: "تذكير يومي لطيف لتثبيت الورد ومنع التفلت",
    reminders_enable_label: "تفعيل التنبيه اليومي",
    reminders_enable_desc: "إشعار محلي بالمتصفح يذكرك بورد اليوم والسور المستحقة",
    reminders_time_label: "وقت التنبيه اليومي:",
    device_time_hint: "بتوقيت جهازك",
    quick_presets_label: "أوقات مقترحة سريعة:",
    fajr_preset: "بعد الفجر 05:30",
    duha_preset: "الضحى 09:00",
    asr_preset: "العصر 16:30",
    isha_preset: "العشاء 21:00",
    test_notification_btn: "تجربة إشعار فوري",
    save_settings: "حفظ الإعدادات",

    // Daily Ward dynamic strings
    daily_ward_title: "الورد اليومي الذكي للمراجعة",
    daily_ward_empty_desc: "ابدأ بتحديد السور التي تحفظها في تبويب «حسب السور» أو الصفحات، ليقوم النظام الذكي بجدولة ورد مراجعتك اليومي تلقائياً وفق خوارزمية التكرار المتباعد لمنع التفلت.",
    daily_ward_complete_badge: "مكتمل 100% ✓",
    daily_ward_complete_desc: "أتممت مراجعة جميع السور المستحقة في ورد اليوم بنجاح",
    daily_ward_complete_congrats: "هنيئاً لك! لا توجد سور مستحقة للمراجعة حالياً. حافظت على عهد القرآن وتثبيت آياته اليوم.",
    daily_ward_test_tamkeen: "اختبر حفظك في تمكين",
    daily_ward_reviewed_today: "عرض ما روجع اليوم",
    daily_ward_done: "تمت ✓",
    daily_ward_interval_4: "كل 4 أيام (تثبيت مكثف)",
    daily_ward_interval_14: "كل 14 يوم (متوسط)",
    daily_ward_interval_28: "كل 28 يوم (إتقان تام)",
    daily_ward_not_reviewed: "لم تراجع مسبقاً",
    daily_ward_overdue_prefix: "متأخرة",
    daily_ward_due_today: "مستحقة اليوم",
    daily_ward_last_review: "آخر مراجعة:",
    daily_ward_mark_done: "تمت المراجعة ✓",
    daily_ward_remaining_surahs: "متبقي",
    daily_ward_subdesc: "مرتبة حسب الأولوية وفترات التكرار المتباعد لتثبيت الحفظ في الصدور"
  },

  en: {
    // Header
    brand_title: "Irtaqi",
    page_count_badge: "604 Pages",
    scroll_top_title: "Return to top of page",
    tamkeen: "Tamkeen",
    tamkeen_title: "Smart Memorization Testing (Tamkeen)",
    install: "Install",
    install_title: "Install app on your device",
    share_card: "Achievement",
    share_card_title: "View Achievement Card",
    mistakes_notebook: "Mistakes",
    mistakes_title: "Mistakes and Retention Notebook",
    about_app: "About",
    about_app_title: "About the app and user guide",
    reminders_title: "Daily Ward Reminder Alarm",
    theme_toggle_title: "Toggle Theme",

    // Banners
    tutorial_title: "Welcome to Irtaqi! Would you like a quick tour of the app?",
    tutorial_badge: "Interface Guide",
    tutorial_desc: "A simplified 1-minute interactive explanation of all buttons, filters, and memorization features.",
    start_tour: "Start Quick Tour",
    skip_tour: "Skip",
    prev: "Previous",
    next: "Next",
    finish_tour: "Finish Tour ✨",
    install_banner_title: "Install Irtaqi on your device",
    install_banner_badge: "PWA App",
    install_banner_desc: "Install the app for instant access, offline work, and secure local progress tracking.",
    install_now: "Install Now",

    // Overview Stats
    total_progress_badge: "Total Memorization Progress (Holy Quran)",
    total_percent_label: "Overall Progress",
    completion_track_label: "Path to Complete Quran Memorization",
    remaining_prefix: "Remaining:",
    hero_tamkeen_btn: "Tamkeen | Test Your Memory Now",
    hero_card_btn: "View Achievement Card & Certificate",
    stat_pages_label: "Memorized Pages",
    stat_surahs_label: "Completed Surahs",
    stat_juz_label: "Completed Ajza",
    stat_ayahs_label: "Approx. Ayahs",
    good_tidings_title: "Good Tidings for the Quran Memorizer",
    hadith_source: "— Narrated by At-Tirmidhi & Abu Dawud",
    reset_history: "Reset Record",
    backup_restore: "Backup & Restore",

    // Navigation Tabs
    tab_by_surah: "Surahs",
    tab_by_surah_full: "By Surahs",
    tab_by_page: "Pages",
    tab_by_page_full: "Pages Grid",
    tab_by_juz: "Ajza",
    tab_tamkeen: "Tamkeen",
    tab_tamkeen_sub: "(Quiz)",

    // Search and Filters
    search_placeholder: "Search by surah name, number, page...",
    filter_show_all: "Show All",
    filter_memorized_only: "Memorized Only",
    filter_unmemorized_only: "Unmemorized",
    showing_surahs_prefix: "Showing",
    surah_unit: "surahs",
    surah_hint: "Tap a surah card to browse in Mushaf or toggle completion",
    pages_grid_title: "Madinah Mushaf Grid (604 Pages)",
    pages_grid_desc: "Tap any page number to toggle memorized / unmemorized.",
    filter_btn_all: "All",
    filter_btn_memorized: "Memorized",
    filter_btn_unmemorized: "Unmemorized",

    // Range Selector
    range_title: "Select multiple page range at once:",
    range_from: "From p.:",
    range_to: "To p.:",
    range_save_btn: "Mark Range",
    range_clear_btn: "Clear Range",
    range_test_btn: "Test Range in Tamkeen",

    // Tamkeen Quiz Section
    tamkeen_heading: "Tamkeen | Smart Quran Testing & Retention",
    tamkeen_subheading: "Measure your memorization solidity across 3 smart testing modes",
    interactive_badge: "Interactive",
    questions_stat: "Questions",
    correct_stat: "Correct",
    accuracy_stat: "Accuracy",
    streak_stat: "Streak",
    reset_btn: "Reset",
    mode_all: "Comprehensive",
    mode_next_ayah: "Next Ayah",
    mode_surah_id: "Identify Surah",
    scope_label: "Question Scope:",
    scope_all: "All Surahs of the Holy Quran",
    scope_memorized_pages: "Only Memorized Pages",
    scope_memorized_surahs: "Only Completed Surahs",
    scope_surah_range: "Custom Surah Range",
    scope_page_range: "Custom Page Range",
    scope_juz_range: "Custom Juz Range",
    tamkeen_loading: "Generating a new question automatically...",
    reveal_options: "Reveal Answer Options",
    recall_first: "Recall the verse by heart first",
    next_question: "Next Question",
    another_question: "Another Question",
    question_next_ayah_prompt: "What is the next noble ayah?",
    question_surah_id_prompt: "In which noble Surah is this ayah found?",
    tamkeen_correct: "Correct Answer! Masha'Allah",
    tamkeen_wrong: "Incorrect! Added to Mistakes Notebook",

    // Common Terms & Cards
    meccan: "Meccan",
    medinan: "Medinan",
    ayah: "ayah",
    ayahs: "ayahs",
    page: "page",
    pages: "pages",
    p_short: "p.",
    juz: "Juz",
    hizb: "Hizb",
    second_half: "Second Half",
    completed: "Completed",
    in_progress: "In Progress",
    mushaf: "Mushaf",
    test_me: "Test Me",
    precise_ayahs: "Precise memorized ayahs:",
    no_results_found: "No results matched your search or selected filter",
    close: "Close",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    mark_all_juz: "Mark Full Juz",
    unmark_all_juz: "Unmark Full Juz",
    test_juz: "Test Juz in Tamkeen",
    browse_surah_title: "Tap to browse surah in the Mushaf",
    toggle_surah_done: "Mark surah as completed",
    toggle_surah_undone: "Unmark surah (restore previous pages)",

    // Daily Ward (SRS)
    daily_ward_title: "Suggested Daily Ward for Review & Memorization",
    daily_ward_desc: "Smart schedule powered by Spaced Repetition to prevent forgetting",
    all_caught_up: "All caught up! No reviews due today. Excellent work!",
    review_quality_excellent: "Excellent (28 days)",
    review_quality_medium: "Good (14 days)",
    review_quality_needs_work: "Needs Review (4 days)",
    mark_reviewed: "Mark Reviewed",

    // Commitment Streak
    streak_title: "Commitment Streak & Recovery Credit",
    days_streak: "consecutive days",
    compensation_credit: "Recovery Days Balance",

    // Mobile Bottom Navigation
    mobile_surahs: "Surahs",
    mobile_pages: "Pages",
    mobile_ajza: "Ajza",
    mobile_tamkeen: "Tamkeen",

    // Modals
    mistakes_notebook_heading: "Mistakes & Retention Notebook",
    mistakes_notebook_sub: "Verses that need repetition and care from Tamkeen quizzes",
    mistakes_footer_hint: "Updates automatically with any error in Tamkeen quizzes",
    clear_mistakes: "Clear Log",
    retest: "Retest",
    mastered: "Mastered ✓",
    mistakes_empty: "Your mistakes notebook is empty! Your memorization is solid.",
    mistakes_empty_title: "Masha'Allah, Excellent!",
    correct_answer_label: "Correct Answer:",
    your_previous_answer_label: "Your Previous Answer:",
    retest_now: "Retest Now",
    mastered_done: "Mastered & Retained ✓",
    surah_prefix: "Surah ",
    repeated_times: "Repeated",
    start_tamkeen_quiz_btn: "Start Tamkeen Quiz Now",

    exit_confirm_title: "Exit Application?",
    exit_confirm_desc: "Do you want to leave? Your progress is securely saved on your device.",
    exit_stay: "Stay",
    exit_leave: "Leave",

    reset_modal_title: "Reset all memorization data?",
    reset_modal_desc: "All your memorization and review records will be permanently erased. This cannot be undone.",
    reset_confirm_btn: "Yes, Reset Data",
    reset_cancel_btn: "Cancel",

    reset_tamkeen_title: "Reset Tamkeen quiz statistics?",
    reset_tamkeen_desc: "Question count, correct answers, accuracy, and streak will be reset to zero.",
    reset_tamkeen_confirm: "Yes, Reset Stats",

    backup_modal_title: "Backup & Data Transfer",
    backup_modal_sub: "Safely backup and transfer your memorization data",
    backup_modal_desc: "Your data is automatically saved in your browser storage. To transfer progress to another device, export the backup file anytime.",
    export_json_btn: "Export Backup File",
    import_json_btn: "Import File",
    json_label: "Memorization Data in JSON format:",
    copy_json_btn: "Copy Code to Clipboard",

    reminders_modal_title: "Daily Ward Reminder Alarm",
    reminders_modal_sub: "A gentle daily reminder to review and retain your Quranic portion",
    reminders_enable_label: "Enable Daily Notification",
    reminders_enable_desc: "Local browser notification reminding you of today's review ward",
    reminders_time_label: "Daily Alarm Time:",
    device_time_hint: "Your device time",
    quick_presets_label: "Quick Presets:",
    fajr_preset: "After Fajr 05:30",
    duha_preset: "Duha 09:00",
    asr_preset: "Asr 16:30",
    isha_preset: "Isha 21:00",
    test_notification_btn: "Test Notification Now",
    save_settings: "Save Settings",

    // Daily Ward dynamic strings
    daily_ward_title: "Smart Daily Review Ward",
    daily_ward_empty_desc: "Start by marking surahs or pages you have memorized in 'By Surahs' or 'Pages', and the smart engine will schedule your daily reviews using Spaced Repetition to prevent forgetting.",
    daily_ward_complete_badge: "100% Completed ✓",
    daily_ward_complete_desc: "You have reviewed all due surahs in today's ward successfully",
    daily_ward_complete_congrats: "Congratulations! No surahs are currently due for review. You maintained your Quranic revision today.",
    daily_ward_test_tamkeen: "Test Your Memory in Tamkeen",
    daily_ward_reviewed_today: "Show Reviewed Today",
    daily_ward_done: "Done ✓",
    daily_ward_interval_4: "Every 4 days (Intensive)",
    daily_ward_interval_14: "Every 14 days (Standard)",
    daily_ward_interval_28: "Every 28 days (Mastery)",
    daily_ward_not_reviewed: "Not reviewed yet",
    daily_ward_overdue_prefix: "Overdue by",
    daily_ward_due_today: "Due today",
    daily_ward_last_review: "Last review:",
    daily_ward_mark_done: "Mark Reviewed ✓",
    daily_ward_remaining_surahs: "Remaining",
    daily_ward_subdesc: "Sorted by priority and spaced repetition intervals to firmly retain memorization"
  },

  it: {
    // Header
    brand_title: "Irtaqi",
    page_count_badge: "604 Pagine",
    scroll_top_title: "Torna all'inizio della pagina",
    tamkeen: "Tamkeen",
    tamkeen_title: "Test Intelligente di Memorizzazione (Tamkeen)",
    install: "Installa",
    install_title: "Installa l'app sul tuo dispositivo",
    share_card: "Risultati",
    share_card_title: "Visualizza la Scheda Risultati",
    mistakes_notebook: "Errori",
    mistakes_title: "Registro Errori e Ripasso",
    about_app: "Info",
    about_app_title: "Info sull'applicazione e guida utente",
    reminders_title: "Promemoria Revisione Giornaliera",
    theme_toggle_title: "Cambia Tema",

    // Banners
    tutorial_title: "Benvenuto su Irtaqi! Vuoi fare un tour rapido dell'app?",
    tutorial_badge: "Guida Interfaccia",
    tutorial_desc: "Una spiegazione interattiva di 1 minuto di tutti i pulsanti, filtri e funzionalità di memorizzazione.",
    start_tour: "Inizia il Tour",
    skip_tour: "Salta",
    prev: "Precedente",
    next: "Avanti",
    finish_tour: "Termina Tour ✨",
    install_banner_title: "Installa Irtaqi sul tuo dispositivo",
    install_banner_badge: "App PWA",
    install_banner_desc: "Installa l'app per un accesso rapido, uso offline e salvataggio sicuro dei tuoi progressi.",
    install_now: "Installa Ora",

    // Overview Stats
    total_progress_badge: "Progresso Totale Memorizzazione (Sacro Corano)",
    total_percent_label: "Progresso Generale",
    completion_track_label: "Percorso verso il completamento della memorizzazione",
    remaining_prefix: "Rimanenti:",
    hero_tamkeen_btn: "Tamkeen | Metti alla Prova la Memoria",
    hero_card_btn: "Mostra Scheda Risultati e Certificato",
    stat_pages_label: "Pagine Memorizzate",
    stat_surahs_label: "Sure Completate",
    stat_juz_label: "Juz Completati",
    stat_ayahs_label: "Versetti Circa",
    good_tidings_title: "Buona Novella per chi Custodisce il Corano",
    hadith_source: "— Narrato da At-Tirmidhi e Abu Dawud",
    reset_history: "Azzera Registro",
    backup_restore: "Backup e Ripristino",

    // Navigation Tabs
    tab_by_surah: "Sure",
    tab_by_surah_full: "Per Sure",
    tab_by_page: "Pagine",
    tab_by_page_full: "Griglia Pagine",
    tab_by_juz: "Juz",
    tab_tamkeen: "Tamkeen",
    tab_tamkeen_sub: "(Test)",

    // Search and Filters
    search_placeholder: "Cerca per nome della sura, numero, pagina...",
    filter_show_all: "Mostra Tutte",
    filter_memorized_only: "Solo Memorizzate",
    filter_unmemorized_only: "Non Memorizzate",
    showing_surahs_prefix: "Mostrati",
    surah_unit: "sure",
    surah_hint: "Tocca una sura per sfogliare nel Mushaf o contrassegnarla",
    pages_grid_title: "Griglia Mushaf di Medina (604 Pagine)",
    pages_grid_desc: "Tocca qualsiasi numero di pagina per alternare memorizzata / non memorizzata.",
    filter_btn_all: "Tutte",
    filter_btn_memorized: "Memorizzate",
    filter_btn_unmemorized: "Non Memorizzate",

    // Range Selector
    range_title: "Seleziona intervallo di pagine contemporaneamente:",
    range_from: "Da pag.:",
    range_to: "A pag.:",
    range_save_btn: "Segna Intervallo",
    range_clear_btn: "Cancella Intervallo",
    range_test_btn: "Test Intervallo in Tamkeen",

    // Tamkeen Quiz Section
    tamkeen_heading: "Tamkeen | Test Intelligente e Consolidamento",
    tamkeen_subheading: "Valuta la solidità della tua memorizzazione con 3 modalità intelligenti",
    interactive_badge: "Interattivo",
    questions_stat: "Domande",
    correct_stat: "Esatte",
    accuracy_stat: "Precisione",
    streak_stat: "Serie",
    reset_btn: "Azzera",
    mode_all: "Completo",
    mode_next_ayah: "Versetto Successivo",
    mode_surah_id: "Identifica Sura",
    scope_label: "Ambito Domande:",
    scope_all: "Tutte le Sure del Sacro Corano",
    scope_memorized_pages: "Solo Pagine Memorizzate",
    scope_memorized_surahs: "Solo Sure Completate",
    scope_surah_range: "Intervallo Sure Personalizzato",
    scope_page_range: "Intervallo Pagine Personalizzato",
    scope_juz_range: "Intervallo Juz Personalizzato",
    tamkeen_loading: "Generazione automatica di una nuova domanda...",
    reveal_options: "Mostra Opzioni di Risposta",
    recall_first: "Richiama il versetto a memoria prima",
    next_question: "Prossima Domanda",
    another_question: "Altra Domanda",
    question_next_ayah_prompt: "Qual è il versetto nobile successivo?",
    question_surah_id_prompt: "A quale nobile Sura appartiene questo versetto?",
    tamkeen_correct: "Risposta Esatta! Masha'Allah",
    tamkeen_wrong: "Errata! Aggiunta al Registro Errori",

    // Common Terms & Cards
    meccan: "Meccana",
    medinan: "Medinese",
    ayah: "versetto",
    ayahs: "versetti",
    page: "pagina",
    pages: "pagine",
    p_short: "pag.",
    juz: "Juz",
    hizb: "Hizb",
    second_half: "Seconda Metà",
    completed: "Completata",
    in_progress: "In Corso",
    mushaf: "Mushaf",
    test_me: "Testami",
    precise_ayahs: "Versetti precisi memorizzati:",
    no_results_found: "Nessun risultato trovato per la ricerca o filtro selezionato",
    close: "Chiudi",
    save: "Salva",
    cancel: "Annulla",
    confirm: "Conferma",
    mark_all_juz: "Segna Juz Completo",
    unmark_all_juz: "Annulla Juz Completo",
    test_juz: "Test Juz in Tamkeen",
    browse_surah_title: "Tocca per sfogliare la sura nel Mushaf",
    toggle_surah_done: "Segna sura come completata",
    toggle_surah_undone: "Annulla completamento (ripristina pagine precedenti)",

    // Daily Ward (SRS)
    daily_ward_title: "Ward Giornaliero Consigliato per Ripasso e Memorizzazione",
    daily_ward_desc: "Programma intelligente basato sulla Ripetizione Spaziata per evitare dimenticanze",
    all_caught_up: "Tutto aggiornato! Nessuna revisione in sospeso oggi. Ottimo lavoro!",
    review_quality_excellent: "Eccellente (28 giorni)",
    review_quality_medium: "Buono (14 giorni)",
    review_quality_needs_work: "Da Ripassare (4 giorni)",
    mark_reviewed: "Segna Revisionato",

    // Commitment Streak
    streak_title: "Serie di Impegno e Giorni di Recupero",
    days_streak: "giorni consecutivi",
    compensation_credit: "Saldo Giorni di Recupero",

    // Mobile Bottom Navigation
    mobile_surahs: "Sure",
    mobile_pages: "Pagine",
    mobile_ajza: "Juz",
    mobile_tamkeen: "Tamkeen",

    // Modals
    mistakes_notebook_heading: "Registro Errori e Ripasso",
    mistakes_notebook_sub: "Versetti che necessitano di ulteriore attenzione e ripasso",
    mistakes_footer_hint: "Si aggiorna automaticamente ad ogni errore nei test di Tamkeen",
    clear_mistakes: "Cancella Tutto",
    retest: "Ripeti Test",
    mastered: "Consolidato ✓",
    mistakes_empty: "Il tuo registro errori è vuoto! Memorizzazione eccellente.",
    mistakes_empty_title: "Masha'Allah, Ottimo Lavoro!",
    correct_answer_label: "Risposta Corretta:",
    your_previous_answer_label: "La Tua Risposta Precedente:",
    retest_now: "Ripeti Test Ora",
    mastered_done: "Consolidato e Memorizzato ✓",
    surah_prefix: "Sura ",
    repeated_times: "Ripetuto",
    start_tamkeen_quiz_btn: "Inizia il Test Tamkeen Ora",

    exit_confirm_title: "Uscire dall'applicazione?",
    exit_confirm_desc: "Vuoi uscire? I tuoi dati sono salvati in sicurezza sul dispositivo.",
    exit_stay: "Resta",
    exit_leave: "Esci",

    reset_modal_title: "Azzerare tutti i dati di memorizzazione?",
    reset_modal_desc: "Tutti i tuoi progressi e registri di ripasso verranno eliminati definitivamente.",
    reset_confirm_btn: "Sì, Azzera Dati",
    reset_cancel_btn: "Annulla",

    reset_tamkeen_title: "Azzerare le statistiche di Tamkeen?",
    reset_tamkeen_desc: "Il conteggio domande, risposte esatte, precisione e serie verranno azzerati.",
    reset_tamkeen_confirm: "Sì, Azzera Statistiche",

    backup_modal_title: "Backup e Trasferimento Dati",
    backup_modal_sub: "Salva e trasferisci i tuoi progressi in totale sicurezza",
    backup_modal_desc: "I tuoi dati sono salvati automaticamente nella memoria del browser. Per trasferire i tuoi progressi su un altro dispositivo, esporta il file di backup in qualsiasi momento.",
    export_json_btn: "Esporta File di Backup",
    import_json_btn: "Importa File",
    json_label: "Dati di Memorizzazione in formato JSON:",
    copy_json_btn: "Copia Codice negli Appunti",

    reminders_modal_title: "Promemoria Revisione Giornaliera",
    reminders_modal_sub: "Un promemoria quotidiano per mantenere salda la tua porzione di Corano",
    reminders_enable_label: "Attiva Promemoria Giornaliero",
    reminders_enable_desc: "Notifica locale del browser per ricordarti la revisione del giorno",
    reminders_time_label: "Orario Promemoria:",
    device_time_hint: "Ora del tuo dispositivo",
    quick_presets_label: "Orari Suggeriti:",
    fajr_preset: "Dopo Fajr 05:30",
    duha_preset: "Duha 09:00",
    asr_preset: "Asr 16:30",
    isha_preset: "Isha 21:00",
    test_notification_btn: "Prova Notifica Ora",
    save_settings: "Salva Impostazioni",

    // Daily Ward dynamic strings
    daily_ward_title: "Ward Giornaliero Intelligente per la Revisione",
    daily_ward_empty_desc: "Inizia selezionando le sure o le pagine memorizzate nella scheda 'Sure' o 'Pagine' per generare il programma di ripasso basato sulla Ripetizione Spaziata.",
    daily_ward_complete_badge: "100% Completato ✓",
    daily_ward_complete_desc: "Hai completato con successo tutte le revisioni previste per oggi",
    daily_ward_complete_congrats: "Congratulazioni! Nessuna sura in attesa di ripasso al momento. Hai preservato il Corano oggi.",
    daily_ward_test_tamkeen: "Metti alla Prova la Memoria in Tamkeen",
    daily_ward_reviewed_today: "Mostra Revisionate Oggi",
    daily_ward_done: "Fatto ✓",
    daily_ward_interval_4: "Ogni 4 giorni (Intensivo)",
    daily_ward_interval_14: "Ogni 14 giorni (Standard)",
    daily_ward_interval_28: "Ogni 28 giorni (Padronanza)",
    daily_ward_not_reviewed: "Non ancora revisionata",
    daily_ward_overdue_prefix: "In ritardo di",
    daily_ward_due_today: "Prevista oggi",
    daily_ward_last_review: "Ultimo ripasso:",
    daily_ward_mark_done: "Segna Revisionata ✓",
    daily_ward_remaining_surahs: "Rimanenti",
    daily_ward_subdesc: "Ordinate per priorità e ripetizione spaziata per consolidare la memorizzazione"
  }
};

/**
 * Get current active language ('ar' | 'en' | 'it')
 */
function getAppLanguage() {
  const saved = localStorage.getItem(I18N_STORAGE_KEY);
  if (saved && (saved === 'ar' || saved === 'en' || saved === 'it')) {
    return saved;
  }
  return 'ar';
}

/**
 * Get translated string by key with optional fallback
 */
function t(key, fallback = '') {
  const lang = getAppLanguage();
  const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY['ar'];
  if (dict && dict[key] !== undefined) {
    return dict[key];
  }
  const arDict = I18N_DICTIONARY['ar'];
  if (arDict && arDict[key] !== undefined) {
    return arDict[key];
  }
  return fallback || key;
}

/**
 * Set application language, update DOM attributes, direction, and trigger re-renders
 */
function setAppLanguage(lang) {
  if (!['ar', 'en', 'it'].includes(lang)) {
    lang = 'ar';
  }
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  applyLanguageToUI();
}

/**
 * Apply current language across the DOM elements and trigger dynamic component refreshes
 */
function applyLanguageToUI() {
  const lang = getAppLanguage();
  const isRTL = (lang === 'ar');

  // 1. Update HTML tag attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

  // 2. Update button group active state
  const langBtns = document.querySelectorAll('[data-lang-btn]');
  langBtns.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === lang) {
      btn.className = "lang-btn px-2 sm:px-2.5 py-1 rounded-lg transition-all text-[11px] leading-tight font-bold bg-emerald-700 text-white shadow-xs";
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.className = "lang-btn px-2 sm:px-2.5 py-1 rounded-lg transition-all text-[11px] leading-tight font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700/60";
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // 3. Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // 4. Translate all elements with data-i18n-html attribute
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const translation = t(key);
    if (translation) {
      el.innerHTML = translation;
    }
  });

  // 5. Translate all titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translation = t(key);
    if (translation) {
      el.setAttribute('title', translation);
    }
  });

  // 6. Translate all placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key);
    if (translation) {
      el.setAttribute('placeholder', translation);
    }
  });

  // 7. Translate all aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const translation = t(key);
    if (translation) {
      el.setAttribute('aria-label', translation);
    }
  });

  // 8. Re-render dynamic elements if app controller is loaded
  try {
    if (typeof renderAll === 'function') renderAll();
    if (typeof updatePagesFilterUI === 'function') updatePagesFilterUI();
    if (typeof renderTamkeenQuiz === 'function') renderTamkeenQuiz();
    if (typeof renderMistakesNotebook === 'function') renderMistakesNotebook();
  } catch (err) {
    console.warn("Language re-render notice:", err);
  }

  // 9. Dispatch event for custom subscribers
  window.dispatchEvent(new CustomEvent('appLanguageChanged', { detail: { lang } }));
}

// Global initialization
if (typeof window !== 'undefined') {
  window.I18N_DICTIONARY = I18N_DICTIONARY;
  window.getAppLanguage = getAppLanguage;
  window.setAppLanguage = setAppLanguage;
  window.applyLanguageToUI = applyLanguageToUI;
  window.t = t;
}
