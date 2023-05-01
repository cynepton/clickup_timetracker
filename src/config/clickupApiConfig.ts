type ClickupApiConfig = {
    readonly apiUrl: string;
}

const DefaultClickupApiConfig: ClickupApiConfig = {
    apiUrl: 'https://api.clickup.com/api/v2',
};

export default DefaultClickupApiConfig;