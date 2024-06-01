export default class DateUtil {
    static convertDateStringToLocaleToYMDD(dateString: string): string {
        return new Date(dateString).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
}