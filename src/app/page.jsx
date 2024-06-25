import Image from "next/image";
import titleimg from "../app/images/title.png";
const people = [
  { number: 2028, name: "מעיין רבינוביץ" },
  { number: 2029, name: "איתי וויס" },
  { number: 2030, name: "אלון מוטולה" },
  { number: 2031, name: "אמיתה דרור" },
  { number: 2032, name: "בר דמרי" },
  { number: 2033, name: "דן דיליון" },
  { number: 2034, name: "זוהרה סטרשנוב" },
  { number: 2035, name: "לוטם דגני" },
  { number: 2036, name: "ליאור קיין" },
  { number: 2037, name: "ליה קרלין" },
  { number: 2038, name: "נויה לאופר" },
  { number: 2039, name: "נועה יפה" },
  { number: 2040, name: "קשת מויאל" },
  { number: 2041, name: "זיו קלמוביץ" },
  { number: 2042, name: "חן קומפל" },
  { number: 2043, name: "יונתן פיינר" },
  { number: 2044, name: "דנה פיטרמן" },
  { number: 2045, name: "יאיר וולנסקי" },
  { number: 2046, name: "עומר שמיוביץ" },
  { number: 2047, name: "גל צוקרמן" },
  { number: 2048, name: "שי יחזקאל" },
  { number: 2049, name: "תו שגיא" },
  { number: 2050, name: "מעין שלם" },
  { number: 2051, name: "ענבר הרפז" },
  { number: 2052, name: "רעות בוכבוט" },
  { number: 2053, name: "שגב מגל" },
  { number: 2054, name: "אלעד וורוצלבסקי" },
  { number: 2055, name: "טל סעדה" },
  { number: 2056, name: "רפא טורקניץ" },
  { number: 2057, name: "ענבל יאשי" },
  { number: 2058, name: "אורן לב" },
  { number: 2059, name: "חוליאן זוקר" },
  { number: 2060, name: "ירין צרפתי" },
  { number: 2061, name: "טל הרגס" },
  { number: 2062, name: "גבי אלבז" },
  { number: 2063, name: "אורי שרף" },
  { number: 2064, name: "גל דגני" },
  { number: 2065, name: "פז בניאש" },
  { number: 2066, name: "עידו בירנבוים" },
  { number: 2067, name: "תמר הלוי" },
  { number: 2068, name: "ענבר כרמי" },
  { number: 2069, name: "עפרי בייבה" },
  { number: 2070, name: "ליאם מלכי" },
  { number: 2071, name: "רומי ברהום" },
  { number: 2072, name: "מישה חובייב" },
  { number: 2073, name: "שקד גסנר" },
  { number: 2074, name: "תמר ארגוב" },
  { number: 2075, name: "אמיר עוז" },
  { number: 2076, name: "ליבי רגבים" },
  { number: 2077, name: "עליסה שפוליאנסקי" },
  { number: 2078, name: "נועה פריד" },
  { number: 2079, name: "מעין חדוותי" },
  { number: 2080, name: "שחר אולסוונג" },
  { number: 2081, name: "יואל ציקמן" },
  { number: 2082, name: "אריקה דובין" },
  { number: 2083, name: "גני למפל" },
  { number: 2084, name: "יהלי אביב" },
  { number: 2085, name: "טל כרמונה" },
  { number: 2086, name: "גל ירון" },
  { number: 2087, name: "נועם אלימלך" },
  { number: 2088, name: "שקד תומר" },
  { number: 2089, name: "אורי תדמור" },
  { number: 2090, name: "יורי חיים" },
  { number: 2091, name: "רוני דוסטאר" },
  { number: 1944, name: "מיטל שחר" },
  { number: 1945, name: "שירן קורן" },
  { number: 1946, name: "אדם לטרולו" }
];
export default function Home() {

  return (
    <div className="bg-[#272660] text-white grid justify-center items-center h-screen w-full overflow-auto m-0 pt-16">
      <img src={titleimg.src} alt="" className="w-[700px] h-[200px]" />

      <div className=" p-8 rounded-lg shadow-lg font-bold w-full ">
        <h1 className=" text-4xl mb-4 max-w-[600px]">הרחבת המחנה, הקמת בית הליברלי הגדול, החלפת הממשלה.</h1>
        <br />
        <p className="mb-2">הבחירות לוועידה יתקיימו מחר ה- 26.6.24, באופן דיגיטלי ומהבית.</p>
        <br />
        <p className="mb-2">כל חברי המפלגה בעלי זכות הצבעה במחוז שלהם</p>
        <br />
        <p className="mb-2">ברשימה מטה מופיעים פרטי כל המומלצים של המחוז שלנו.</p>
        <br />
        <p className="mb-2">מומלץ להשתמש במחשב לתהליך הבחירה (לעומת נייד שמסורבל יותר).</p>
        <br />
        <p className=" mb-4 max-w-[520px]">
          הצבעת המתפקד כך:
          <br />1. תשלח לכם הודעה SMS עם לינק להצבעה דיגיטלית.
          <br />2. פתחו את (טאב) הקישור על המחשב, והעתיקו את מספרי המועמדים או השמות למערכת ההצבעה.
          <br />3. לאחר שתבחרו את מינימום האנשים במחוז שלכם, יופיע כפתור אישור הצבעה.
        </p>
        <h2 className="text-xl mb-4">המועמדים המומלצים ע"י מחוז דרום הם:</h2>
        <div className="form-group mb-4 w-fit ">
          {people.map((person) => (
            <div className="flex gap-x-2">
              <p>{person.number}</p>
              <p>-</p>
              <p>{person.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
