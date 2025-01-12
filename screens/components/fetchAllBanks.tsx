interface Bank {
    code: string;
    name: string;
}

type SetBanks = (banks: Bank[]) => void;

const fetchBanks = async (setBanks: SetBanks, setFilteredBanks: SetBanks): Promise<void> => {
    try {
        const response = await fetch(
            "https://vouch-backend.onrender.com/api/v1/banks/get_all_nigerian_bank_codes/"
        );
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const bankList: Bank[] = Object.entries(data).map(([code, name]) => ({
            code,
            name: name as string,
        }));
        setBanks(bankList);
        setFilteredBanks(bankList);
    } catch (error) {
        console.error("Error fetching banks:", (error as Error).message);
    }
};

export default fetchBanks;
