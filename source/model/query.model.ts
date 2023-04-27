type Query = {
    query?: string;
    response: number;
};

const error = (message: string, response: number): Query => ({ query: message, response });

export default Query;
export { error };
