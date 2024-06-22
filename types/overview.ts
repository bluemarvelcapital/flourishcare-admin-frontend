export interface OverviewTypes {
    name: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    preview_image : string;
}

const data: OverviewTypes[] = [
    {
        name: "Adedotun Ogumbamowo",
        emailAddress: "adedotunOgumbamowo@gmail.com",
        phoneNumber: "+(234) 802 789 2367",
        address: "25 Omoregbe boulevard, BDPA, Benin city",
        preview_image: "/user-img-1.svg",
    },
    {
        name: "Akanbi Mayowa",
        emailAddress: "akanbimayowo@gmail.com",
        phoneNumber: "+(234) 925 639 3522",
        address: "1901 Diamond Avenue, Hawaii",
        preview_image: "/user-img-2.svg",
    },
    {
        name: "Jane Cooper",
        emailAddress: "jane_cooper@aum.edu",
        phoneNumber: "(303) 555-0105",
        address: "4140 Parker Rd, Allentown, New Mexico",
        preview_image: "/user-img-3.svg",
    },
    {
        name: "Abbey Jameson",
        emailAddress: "abbeyjameson@gmail.com",
        phoneNumber: "(629) 555-0129",
        address: "47 Ademola Rd, Staten Island, New York",
        preview_image: "/user-img-1.svg",
    },
];

export {data}
