import { v4 as uid } from 'uuid';

const generalFunctions = {
    generateUID: async () => {
        try {
            // Get the current timestamp in milliseconds
            const timestamp: number = parseInt(`${Date.now()}${(Math.floor(Math.random() * 9000))}`);

            const hex: string = timestamp?.toString(16)?.toLocaleUpperCase();

            console.log(hex);
            return hex;
        } catch (err) {
            return err.message;
        }
    },
    generateWabId: async () => {
        try {
            return uid();
        } catch (err) {
            return err.message;
        }
    }
};

export default generalFunctions;