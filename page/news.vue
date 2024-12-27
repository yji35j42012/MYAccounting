<style scoped></style>

<template>
	<!-- <div class="news_item" v-for="(item, index) in showData" :key="index">
		<div class="news_pic">
		<img :src="item.urlToImage" alt="">
	</div>
		<div class="news_title">{{ item.title }}</div>
	</div> -->
</template>

<script>

module.exports={
	data() {
		return {
			newsData: [],
		};
	},
	mixins: [],
	components: {},
	mounted() {
		store.dispatch("SET_LOADING_ACTION", false);
		const rssUrl='https://news.google.com/rss/search?q=科技&hl=zh-TW&gl=TW&ceid=TW:zh-Hant';
		axios.get(rssUrl).then(res => {
			// const xmlData=res.data;
			// 使用 xml2js 解析 XML 並轉為 JSON
			// const parser=new xml2js.Parser({ explicitArray: false });
		})

		// let url="https://newsapi.org/v2/everything";
		// let news_apikey="2c30ceedb0294517a5c48a29041a128b"
		// const params={
		// 	q: "",        // 搜索關鍵字
		// 	language: "zh",  // 指定語言為中文
		// 	domains: "ettoday.net,udn.com,cna.com.tw",
		// 	//pageSize: 5,     // 每次返回的新聞數量
		// 	apiKey: "2c30ceedb0294517a5c48a29041a128b"   // API 金鑰
		// };
		// // let news_url="https://newsapi.org/v2/everything?q=apple&from=2024-12-18&to=2024-12-19&sortBy=popularity&apiKey="+news_apikey;
		// // console.log('news_url', news_url);
		// axios.get(url, { params }).then(res => {
		// 	let objArr=[]
		// 	res.data.articles.forEach(element => {
		// 		// console.log('element', element);
		// 		objArr.push(
		// 			{
		// 				author: element.author,
		// 				content: element.content,
		// 				description: element.description,
		// 				publishedAt: element.publishedAt,
		// 				source: element.source,
		// 				title: element.title,
		// 				url: element.url,
		// 				urlToImage: element.urlToImage
		// 			}
		// 		)
		// 		// this.newsData.push(element)
		// 	});
		// 	console.log('objArr', objArr);
		// 	this.newsData=objArr;
		// });
	},
	computed: {
		// showData() {
		// 	console.log('show', this.newsData);
		// 	return this.newsData
		// }
	},
	methods: {}
};
</script>