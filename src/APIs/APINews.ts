import axios from 'axios';

export default class NewsServise{
    static async getAll(){
        try {
            const response = await axios.get('https://newsapi.org/v2/everything?q=music&pageSize=10&page=1&sortBy=popularity&apiKey=9f16f226dbd54360aa4faefe09639f15');
            
            return response
        } catch (e) {
            console.log(e);
        }
    }
}