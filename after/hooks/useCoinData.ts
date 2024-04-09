import { useState, useEffect } from 'react';
import CoinGeckoApi from 'path-to-your-coin-gecko-api';
//though the function is small but can be scaled in future
const useCoinData = () => {
    const [coinData, setCoinData] = useState<any>({});

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const data = await CoinGeckoApi.fetchCoinData();
                setCoinData(data?.market_data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchCoinData();

    }, []);

    return coinData;
};

export default useCoinData;
