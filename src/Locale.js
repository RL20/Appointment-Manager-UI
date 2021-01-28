/**
 * Created by aviya on 02/11/17.
 */

import LocalizedStrings from 'react-localization';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';



// import locale from 'json!../../locales/index.json';
var locale = {
    "en":{
        "isRTL": false,
        "loginPage": {

            "loginTitle": "LOGIN",
            "loginFacebook": "Login with Facebook",
            "loginGoogle":"Login with  Google",
            "registerTitle": "REGISTER",
            "registerUrl":"Register",
            "signInButton":"Sign-In",
            "regQuestion":"Not signed yet?",
            "or": "OR",
            "email": "E-mail",
            "password": "Password",
            "firstName": "First Name",
            "lastName": "Last Name",
            "phone": "Phone",
            "address": "Address (Optional)"
        },
        "homePage": {
            "appbar": {
                "title": "Home"
            }
        },
        "navigationDrawer":{
            "home":"Home",
            "appointments":"Appointments",
            "absences":"Absences",
            "employees":"Employees",
            "customers":"Customers",
            "openingHours":"Opening Hours",
            "pictures":"Pictures",
            "navigate":"Navigate",
            "contactUs":"Contact Us",
            "settings":"Settings",
            "about":"About"
        },
        "appointmentsPage":{
            "appbar":{"title":"Appointments"},
            "listTitle":{
                "appointments": "Appointments",
                "byCustomer": "By Customer",
                "byEmployee": "By Employee",
                "history": "History",
                "todaysAppointments": "Today's Appointments"
            },
            "listIsEmpty":"Nothing to show...",
            "history":{
                "results":" Results ",
                "time":"Time",
                "employee":"Employee",
                "customer":"Customer"
            },
            "selectCheckbox":"Select items"
        },
        "setAppointmentPage":{
            "appbar":{"title":"New appointment"},
            "h2Title":"Closest Available Hours",
            "selectEmployeeButtonAll":"Employees: All",
            "selectEmployeeButton":"Employee: "
        },
        "absencesPage":{
            "appbar":{"title":"Absences"},
            "listTitle":{
                "absences": "Absences",
                "byEmployee": "By Employee",
                "chooseEmployee":"Choose Employee"

            }
        },
        "employeesPage":{
            "appbar":{"title":"to be change..will create person instead customer and employee"}

        },
        "openingHoursPage":{
            "appbar":{"title":"Opening Hours"},
            "h2Title":"We're Available at This times...",
            "weekDays": {
                "SUNDAY":"Sunday",
                "MONDAY":"Monday",
                "TUESDAY":"Tuesday",
                "WEDNESDAY":"Wednesday",
                "THURSDAY":"Thursday",
                "FRIDAY":"Friday",
                "SATURDAY":"Saturday"
            },
            "from":"from",
            "to":"to",
            "closed":"Closed"
        },
        "picturesPage":{
            "appbar":{"title":"Pictures"},
            "picsUploadTitle": "Upload picture"
        },

        "navigatePage":{
            "appbar":{"title":"Navigate"},
            "checkboxLabel":"By coordinates",
            "longitudeTextField":"longitude",
            "latitudeTextField":"latitude",
            "longitudeHintText":"e.g. 34.2457683473",
            "latitudeHintText":"e.g. 32.8374563847",
            "findButton":"Find",
            "findMyLocationButton":"Find my location",
            "navigateButton":"Navigate",
            "doneButton":"done",
            "muiGeoSuggest":{
                "hintText":"e.g. New York, NY 10118",
                "title":"Address"
            }
        },


        "contactUsPage":{
            "appbar":{"title":"Contacts Us"}
        },
        "aboutPage":{
            "appbar":{"title":"About"},
            "contact":"Contact",
            "feedback":"Feedback",
            "rateUs":"Rate Us "
        },

        "settingsPage":{
            "appbar":{"title":"Settings"},
            "general":{
                "h2Title":"General",
                "themeColor":"Theme color",
                "language" : "Language",
                "logout":"Log out",
                "blue":"Blue",
                "red":"Red",
                "orange":"Orange",
                "green":"Green",
                "black":"Black"
            },
            "notifications":{
                "h2Title":"Notifications"
            },
            "account":{
                "h2Title":"Account"
            }
        },
        "personShowAndEdit":{
            "name":"Name",
            "phone":"Phone",
            "email":"E-mail",
            "address":"Address"
        },
        "appointmentShowAndEdit":{
            "appointmentDate": "Date",
            "appointmentTime": "Time",
            "comment": "Comment",
            "customerId": "Customer",
            "durationTime": "Appointment Duration",
            "employeeId":  "Employee"
        },
        "personsPage":{
            "appbar":{
                "title":{
                    "customer":"Customers",
                    "employee":"Employees",
                    "search": "Search"
                }}
        },
        "userProfilePage":{
            "appbar":{"title":"User Profile"}
        },
        "setNewPersonPage":{
            "appbar":{"title":{"customer":"Set new Customer", "employee":"Set new Employee"}},
            "customerCreated":"new Customer Created!",
            "employeeCreated":"new Employee Created!"
        },
        "filterBar":{
            "title": "Filter",
            "hintDateMin":"Min Date",
            "hintDateMax":"Max Date",
            "selectEmployeeButtonAll":"Employees: All",
            "selectEmployeeButton":"Employee: ",
            "selectCustomerButtonAll":"Customers: All",
            "selectCustomerButton":"Customer: ",
            "filterButton":"filter",
            "titleQuickAccess":"Quick Access",
            "todayButtonShortcut":"Today",
            "weekButtonShortcut":"Week",
            "monthButtonShortcut":"Month",
            "allButtonShortcut":"All"


        },
        "availableHoursDialog":{
            "availableHoursTitle":"Available Hours",
            "confirmAppointmentTitle":"Confirm Appointment",
            "comment":"Comment",
            "writeAcomment":"Write a comment..",
            "customer: ":"customer",
            "chooseCustomer":"Choose Customer",
            "hintTextName":"Name",
            "hintTextPhone":"Phone",
            "newCustomer":"New Customer"


        },
        "absecesShowAndEdit": {

            "floatingLabelTextDate": "Date",
            "floatingLabelTextFromHour": "From Hour",
            "floatingLabelTextToHour": "To Hour"

        },
        "submit":"Submit",
        "search":"Search",
        "cancel":"Cancel",
        "upload":"Upload",
        "choose":"Choose",
        "done":"Done",
        "all":"All",
        "ok":"Ok",
        "delete":"Delete",
        "share":"Share",
        "css": {
            "pushContent": {
                "marginLeft": "250px",
                "marginRight": "0"
            },
            "drawerOpenedFixedContainer": {
                "width": "99%",
                "position": "fixed",
                "display": "flex",
                "justifyContent": "center",
                "zIndex": "2",
                "left": "125"
            },
            "iconBack": ArrowBackIcon
        }
    },

    "he":{
        "isRTL": true,
        "loginPage": {

            "loginTitle": "כניסה",
            "loginFacebook":"התחבר עם פייסבוק",
            "loginGoogle":"התחבר עם גוגל",
            "registerTitle": "הרשמה",
            "registerUrl":"הירשם",
            "signInButton":"התחבר",
            "regQuestion":"לא רשום עדיין?",
            "or":"או",
            "email": "דואר אלקטרוני",
            "password": "סיסמא",
            "firstName": "שם פרטי",
            "lastName": "שם משפחה",
            "phone": "טלפון",
            "address": "כתובת(אופציונלי)"
        },
        "homePage": {
            "appbar": {
                "title": "בית"
            }
        },
        "navigationDrawer":{
            "home":"בית",
            "appointments":"תורים",
            "absences":"העדרויות",
            "employees":"עובדים",
            "customers":"לקוחות",
            "openingHours":"שעות פתיחה",
            "pictures":"תמונות",
            "navigate":"נווט",
            "contactUs":"צור קשר",
            "settings":"הגדרות",
            "about":"אודות"
        },
        "appointmentsPage":{
            "appbar":{"title":"תורים"},
            "listTitle":{
                "appointments": "תורים",
                "byCustomer": "לפי לקוח",
                "byEmployee": "לפי עובד",
                "history": "היסטוריית תורים",
                "todaysAppointments": "תורים היום הקרוב"
            },
            "listIsEmpty":"אין מה להציג...",
            "history":{
                "results":" תוצאות ראשונות",
                "time":"זמן",
                "employee":"עובד",
                "customer":"לקוח"
            },
            "selectCheckbox":"סמן פריטים "

        },
        "setAppointmentPage":{
            "appbar":{"title":"צור תור חדש"},
            "h2Title":"תורים קרובים ביותר",
            "selectEmployeeButtonAll":"עובדים: הכל",
            "selectEmployeeButton":"עובד: "
        },
        "absencesPage":{
            "appbar":{"title":"העדרויות"},
            "listTitle":{
                "absences": "העדרויות",
                "byEmployee": "לפי עובד"
            },
            "chooseEmployee":"בחר עובד"
        },
        "emloyeesPage":{
            "appbar":{"title":"צריף לשנות לפי אנשים"}

        },
        "openingHoursPage":{
            "appbar":{"title":"שעות פתיחה"},
            "h2Title":"אנחנו זמינים בשעות הבאות ",
            "weekDays": {
                "SUNDAY":"ראשון",
                "MONDAY":"שני",
                "TUESDAY":"שלישי",
                "WEDNESDAY":"רביעי",
                "THURSDAY":"חמישי",
                "FRIDAY":"שישי",
                "SATURDAY":"שבת"
            },
            "from":"משעה",
            "to":"עד שעה",
            "closed":"סגור"
        },
        "picturesPage":{
            "appbar":{"title":"תמונות"},
            "picsUploadTitle": "טען תמונות"
        },

        "navigatePage":{
            "appbar":{"title":"ניווט"},
            "checkboxLabel":"לפי קורדינטות",
            "longitudeTextField":"קו אורך",
            "latitudeTextField":"קו רוחב",
            "longitudeHintText":"לדוג' 34.2457683473",
            "latitudeHintText":"לדוג' 32.8374563847",
            "findButton":"חפש",
            "findMyLocationButton":"מצא את המיקום שלי",
            "navigateButton":"ניווט",
            "doneButton":"בצע",
            "muiGeoSuggest":{
                "hintText":"לדוג'  :אלנבי 10,תל אביב,ישראל",
                "title":"כתובת"
            }
        },


        "contactUsPage":{
            "appbar":{"title":"צור קשר"}
        },
        "aboutPage":{
            "appbar":{"title":"אודות"},
            "contact":"צור קשר",
            "feedback":"משוב",
            "rateUs":"דרג אותנו "
        },

        "settingsPage":{
            "appbar":{"title":"הגדרות"},
            "general":{
                "h2Title":"כללי",
                "themeColor":"ערכת נושא",
                "language" : "שפה",
                "logout":"יציאה",
                "blue":"כחול",
                "red":"אדום",
                "orange":"כתום",
                "green":"ירוק",
                "black":"שחור"


            },
            "notifications":{
                "h2Title":"התראות"
            },
            "account":{
                "h2Title":"חשבון"
            }
        },
        "personShowAndEdit":{
            "name":"שם",
            "phone":"טלפון",
            "email":"דואר אלקטרוני",
            "address":"כתובת"
        },
        "appointmentShowAndEdit":{
            "appointmentDate": "תאריך",
            "appointmentTime": "שעה",
            "comment": "הערה",
            "customerId": "לקוח",
            "durationTime": "משך תור",
            "employeeId":  "עובד"
        },
        "personsPage":{
            "appbar":{
                "title":{
                    "customer":"לקוחות",
                    "employee":"עובדים",
                    "search": "חיפוש"
            }}
        },
        "userProfilePage":{
            "appbar":{"title":"פרופיל משתמש"}
        },
        "setNewPersonPage":{
            "appbar":{"title":{"customer":"צור לקוח חדש" , "employee": "צור עובד חדש"}},
            "customerCreated":"לקוח חדש נוצר!",
            "employeeCreated":"עובד חדש נוצר!"
        },
        "filterBar":{
            "title": "סינון",
            "hintDateMin":"תאריך התחלה",
            "hintDateMax":"תאריך סיום",
            "selectEmployeeButtonAll":"עובדים: הכל",
            "selectEmployeeButton":"עובד: ",
            "selectCustomerButtonAll":"לקוחות: הכל",
            "selectCustomerButton":"לקוח: ",
            "filterButton":"סנן",
            "titleQuickAccess":"גישה מהירה",
            "todayButtonShortcut":"היום",
            "weekButtonShortcut":"השבוע הקרוב",
            "monthButtonShortcut":"החודש הקרוב",
            "allButtonShortcut":"הכל"


        },
        "availableHoursDialog":{
            "availableHoursTitle":"תורים פנויים",
            "confirmAppointmentTitle":"אישור תור",
            "writeAComment":"כתוב הערה...",
            "customer: ":"לקוח",
            "chooseCustomer":"בחר לקוח",
            "hintTextName":"שם",
            "hintTextPhone":"טלפון",
            "newCustomer":"לקוח חדש"
        },
        "absecesShowAndEdit": {

            "floatingLabelTextDate": "תאריך",
            "floatingLabelTextFromHour": "משעה",
            "floatingLabelTextToHour": "עד שעה"

        },

        "submit":"אישור",
        "search":"חפש",
        "cancel":"בטל",
        "upload":"העלה קובץ",
        "choose":"בחר",
        "done":"בצע",
        "all":"הכל",
        "ok":"אישור",
        "delete":"מחק",
        "share":"שתף",
        "css": {
            "pushContent": {
                "marginRight":"250px",
                "marginLeft":"0"
            },
            "drawerOpenedFixedContainer": {
                "width": "99%",
                "position": "fixed",
                "display": "flex",
                "justifyContent": "center",
                "zIndex": "2",
                "right": "125"
            },
            "iconBack": ArrowForwardIcon
}
    }

};

window.strings = new LocalizedStrings(locale);