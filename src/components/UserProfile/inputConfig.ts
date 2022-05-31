interface IInputConfig {
    type: string;
    name: string;
    key: string;
    placeholder: string;
    [key: string]: any;
}

export const inputConfig: IInputConfig[] = [
    { type: "text", name: "Name", key: "name", placeholder: "Ivan Ivanov" },
    { type: "text", name: "User name", key: "username", placeholder: "Ivan" },
    {
        type: "text",
        name: "Email",
        key: "email",
        placeholder: "example@mail.com",
    },
    { type: "text", name: "Street", key: "street", placeholder: "ул. Пример" },
    { type: "text", name: "City", key: "city", placeholder: "Москва" },
    { type: "text", name: "Zip code", key: "zipcode", placeholder: "1234234" },
    { type: "text", name: "Phone", key: "phone", placeholder: "89991112233" },
    {
        type: "text",
        name: "Website",
        key: "website",
        placeholder: "www.example.com",
    },
    {
        type: "textarea",
        name: "Comment",
        key: "comment",
        placeholder: "",
    },
];
