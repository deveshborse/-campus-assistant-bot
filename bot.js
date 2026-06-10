// ── Campus Assistant Bot — bot.js ──
// Knowledge Base
const KB = {
  hello: {
    keys: ['hi','hello','hey','start','menu','help','hii','helo'],
    response: `Hello! 👋 Welcome to Campus Assistant Bot!\n\nI'm your 24/7 college helpdesk. I can help you with:\n\n1️⃣  Admission Inquiries\n2️⃣  Course Information\n3️⃣  Exam Schedules\n4️⃣  Fee Details\n5️⃣  Contact Information\n\nJust type your question or click a topic on the left!`,
    quick: ['Tell me about admissions', 'What courses are available?', 'Exam schedule', 'Fee structure', 'Contact details']
  },
  admissions: {
    keys: ['admission','apply','eligib','enrol','join','register','document','requirement','last date','deadline','intake','how to get admitted','application'],
    response: `📋 Admission Details — 2024-25\n\n✅ Eligibility\n   • 10+2 with min. 50% marks\n   • Science / Commerce / Arts accepted\n\n📅 Important Dates\n   • Application Opens: June 1, 2024\n   • Last Date to Apply: July 31, 2024\n   • Merit List: August 10, 2024\n   • Classes Begin: August 26, 2024\n\n🌐 Apply Online\n   admissions.college.edu\n\n📁 Documents Required\n   • 10th & 12th Mark Sheets\n   • Transfer Certificate\n   • Aadhar Card / Photo ID\n   • 4 Passport-size Photographs\n   • Domicile Certificate (if applicable)`,
    quick: ['Scholarship details', 'Fee structure', 'Available courses', 'Contact admissions office']
  },
  courses: {
    keys: ['course','program','degree','btech','bca','bba','mba','mtech','branch','stream','subject','curriculum','syllabus','which course','available program'],
    response: `🎓 Programs Offered\n\n── Undergraduate (3–4 Years) ──\n• B.Tech  →  CSE, IT, ECE, Mechanical, Civil\n• BCA     →  Computer Applications\n• BBA     →  Business Administration\n• B.Sc    →  Physics / Chemistry / Maths\n• B.Com   →  Commerce (General / Accounts)\n\n── Postgraduate (2 Years) ──\n• M.Tech  →  CSE, ECE\n• MBA     →  Finance, HR, Marketing\n• MCA     →  Computer Applications\n\n📌 All programs are AICTE / UGC approved.\nTotal seats: 1,200+ across all programs.`,
    quick: ['B.Tech fees', 'Admission process', 'Exam schedule', 'Contact academics office']
  },
  exams: {
    keys: ['exam','test','schedule','date','hall ticket','result','practical','internal','assessment','timetable','when is exam','semester exam','end sem'],
    response: `📅 Exam Schedule — 2024-25\n\n── Mid-Semester Exams ──\n   September 15 – September 22, 2024\n\n── End-Semester Exams ──\n   November 10 – November 30, 2024\n\n── Practical Exams ──\n   December 2 – December 10, 2024\n\n🎫 Hall Tickets\n   Available on student portal 7 days before exam\n   portal.college.edu/hallticket\n\n✅ Results\n   Published within 30 days after last exam\n\n⚠️  Min. 75% attendance required to sit for exams`,
    quick: ['Internal assessments', 'Fee details', 'Contact exam cell', 'Student portal link']
  },
  fees: {
    keys: ['fee','cost','price','pay','tuition','hostel','scholarship','discount','amount','charges','instalment','how much','fee structure'],
    response: `💰 Fee Structure — 2024-25 (Per Year)\n\n── Tuition Fees ──\n   • B.Tech      →  ₹85,000\n   • BCA / BBA   →  ₹45,000–₹50,000\n   • B.Sc / B.Com→  ₹35,000–₹40,000\n   • MBA         →  ₹95,000\n   • M.Tech      →  ₹90,000\n\n── Additional Charges ──\n   • Hostel (optional)  →  ₹60,000/year\n   • Mess               →  ₹30,000/year\n   • Library & Lab Fee  →  ₹5,000/year\n\n💳 Payment Options\n   Online portal, Demand Draft, or Accounts Office\n\n🎓 Scholarships Available\n   Merit-based (up to 25%) & Need-based (up to 50%)`,
    quick: ['Scholarship details', 'Admission process', 'Contact accounts office', 'Fee payment portal']
  },
  contact: {
    keys: ['contact','phone','email','address','reach','call','helpline','office','where','location','department','number'],
    response: `📞 College Contact Directory\n\n── Main Office ──\n   📱 +91-22-1234-5678\n   🕘 Monday–Saturday, 9:00 AM – 5:00 PM\n\n── Email Contacts ──\n   📧 Admissions  →  admissions@college.edu\n   📧 Exam Cell   →  exams@college.edu\n   📧 Accounts    →  accounts@college.edu\n   📧 General     →  help@college.edu\n\n── Online ──\n   🌐 www.collegename.edu.in\n   🖥️  Student Portal: portal.college.edu\n\n── Campus Address ──\n   📍 College Road, Near City Centre\n       Mumbai – 400001, Maharashtra`,
    quick: ['Admission inquiry', 'Fee details', 'Exam schedule', 'Campus map']
  },
  scholarship: {
    keys: ['scholarship','merit','need','financial','aid','waiver','free seat','concession'],
    response: `🏆 Scholarship Opportunities\n\n── Merit Scholarship ──\n   • Top 10% in entrance / 12th boards\n   • Benefit: 25% fee waiver\n\n── Need-Based Scholarship ──\n   • Family income < ₹3 Lakh/year\n   • Benefit: Up to 50% fee waiver\n\n── Sports Quota ──\n   • National / State level athletes\n   • Special fee concession + hostel priority\n\n── Government Schemes ──\n   • EBC, OBC, SC/ST scholarships via govt portal\n   • Apply: mahadbt.maharashtra.gov.in\n\n📋 Apply To: scholarships@college.edu\n📅 Deadline: August 15, 2024`,
    quick: ['Fee structure', 'Admission process', 'Contact office']
  },
  internals: {
    keys: ['internal','cia','continuous','assignment','project','viva','lab','internal marks'],
    response: `📓 Internal Assessment Breakdown\n\n── Per Subject (50 internal marks) ──\n   • Assignments / Quizzes  →  10 marks\n   • Mid-Semester Test       →  20 marks\n   • Attendance              →   5 marks\n   • Lab / Project / Viva    →  15 marks\n\n⚠️  Min. 75% attendance required\n       (or medical exemption applies)\n\n📊 Check your marks on the student portal:\n   portal.college.edu/marks`,
    quick: ['Exam schedule', 'Contact class coordinator', 'Fee details']
  },
  portal: {
    keys: ['portal','login','student portal','online','website'],
    response: `🖥️ Student Portal Guide\n\n🌐 URL: portal.college.edu\n\n── Available Services ──\n   • View & download hall tickets\n   • Check internal + semester marks\n   • Fee payment & receipts\n   • Attendance tracker\n   • Course registration\n   • Exam timetable download\n\n🔑 Login: Use your enrollment number + DOB\n📞 Portal support: itsupport@college.edu`,
    quick: ['Exam schedule', 'Fee payment', 'Contact IT support']
  }
};

const FALLBACK = [
  `I'm sorry, I didn't quite understand that! 🤔\n\nYou can try:\n• Typing 'menu' to see all topics\n• Clicking a topic in the sidebar\n• Rephrasing your question\n• Emailing us at help@college.edu`,
  `Hmm, I couldn't find info on that.\n\nTry asking about:\n📋 Admissions   📚 Courses\n📅 Exams         💰 Fees   📞 Contact\n\nOr type 'help' for the full menu.`,
  `I'm still learning! I didn't catch that one.\n\nFor complex queries, please contact:\n📧 help@college.edu\n📞 +91-22-1234-5678`
];

// ── State ──
let fallbackIndex = 0;

// ── DOM refs ──
const messagesEl = document.getElementById('messages');
const inputEl    = document.getElementById('user-input');
const sendBtn    = document.getElementById('send-btn');
const topicBtns  = document.querySelectorAll('.topic-btn');

// ── Helpers ──
function scrollToBottom() {
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function createAvatar(type) {
  const av = document.createElement('div');
  av.className = `avatar ${type === 'bot' ? 'bot-msg-avatar' : 'user-msg-avatar'}`;
  av.textContent = type === 'bot' ? 'CA' : 'U';
  return av;
}

function addMessage(text, type, quickReplies = []) {
  const wrap = document.createElement('div');
  wrap.className = `msg ${type}`;

  const av  = createAvatar(type);
  const bub = document.createElement('div');
  bub.className = 'bubble';
  bub.textContent = text;

  if (type === 'bot') { wrap.appendChild(av); }
  wrap.appendChild(bub);
  if (type === 'user') { wrap.appendChild(av); }

  messagesEl.appendChild(wrap);

  if (quickReplies.length && type === 'bot') {
    const qWrap = document.createElement('div');
    qWrap.className = 'quick-wrap';
    const qRow = document.createElement('div');
    qRow.className = 'quick-row';
    quickReplies.forEach(label => {
      const btn = document.createElement('button');
      btn.className = 'qbtn';
      btn.textContent = label;
      btn.addEventListener('click', () => handleInput(label));
      qRow.appendChild(btn);
    });
    qWrap.appendChild(qRow);
    messagesEl.appendChild(qWrap);
  }

  scrollToBottom();
}

function showTyping() {
  const wrap = document.createElement('div');
  wrap.className = 'msg bot';
  wrap.id = 'typing-indicator';
  const av = createAvatar('bot');
  const td = document.createElement('div');
  td.className = 'typing-bubble';
  for (let i = 0; i < 3; i++) {
    const s = document.createElement('span'); td.appendChild(s);
  }
  wrap.appendChild(av);
  wrap.appendChild(td);
  messagesEl.appendChild(wrap);
  scrollToBottom();
}

function hideTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

// ── Intent Matching ──
function getResponse(input) {
  const t = input.toLowerCase().trim();

  for (const [, data] of Object.entries(KB)) {
    if (data.keys.some(kw => t.includes(kw))) {
      return { text: data.response, quick: data.quick };
    }
  }

  const fb = FALLBACK[fallbackIndex % FALLBACK.length];
  fallbackIndex++;
  return { text: fb, quick: ['Admissions', 'Courses', 'Exam schedule', 'Fees', 'Contact'] };
}

// ── Handle Input ──
function handleInput(text) {
  if (!text.trim()) return;
  addMessage(text, 'user');
  inputEl.value = '';
  topicBtns.forEach(b => b.classList.remove('active'));

  showTyping();
  const delay = 600 + Math.random() * 500;

  setTimeout(() => {
    hideTyping();
    const { text: resp, quick } = getResponse(text);
    addMessage(resp, 'bot', quick);
  }, delay);
}

// ── Event Listeners ──
sendBtn.addEventListener('click', () => handleInput(inputEl.value));
inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') handleInput(inputEl.value); });

topicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const topic = btn.dataset.topic;
    if (topic === 'reset') {
      messagesEl.innerHTML = '';
      fallbackIndex = 0;
      topicBtns.forEach(b => b.classList.remove('active'));
      setTimeout(() => addMessage(
        `Chat restarted! 👋 How can I help you today?\n\nType a question or click any topic on the left.`,
        'bot',
        ['Admissions', 'Courses', 'Exam schedule', 'Fees', 'Contact']
      ), 200);
      return;
    }
    topicBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const map = {
      hello:      'hello',
      admissions: 'Tell me about admissions',
      courses:    'What courses are available?',
      exams:      'What is the exam schedule?',
      fees:       'What are the fees?',
      contact:    'How do I contact the college?'
    };
    if (map[topic]) handleInput(map[topic]);
  });
});

// ── Boot Message ──
setTimeout(() => {
  addMessage(
    `Hello! 👋 Welcome to Campus Assistant Bot!\n\nI'm your 24/7 college helpdesk. I can help you with:\n\n1️⃣  Admission Inquiries\n2️⃣  Course Information\n3️⃣  Exam Schedules\n4️⃣  Fee Details\n5️⃣  Contact Information\n\nType your question below or click a topic on the left!`,
    'bot',
    ['Tell me about admissions', 'What courses are available?', 'Exam schedule', 'Fee structure']
  );
}, 400);
