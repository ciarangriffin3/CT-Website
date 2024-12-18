	


document.addEventListener('DOMContentLoaded', function () {
	const articles = {
		"article1": `
		<h2>Star Striker & Rapper Isaac Onoagarakpote "Young IZ" Performs in DCU</h2>
		<p>Our multi-talented goalscorer took his music career to the nect level when he performed in front of a packed DCU crowd last week. Manager Don is said to be worried that Isaac is not taking his recovery serious enough, as he the forward is set to soon return from a knee sprain.</p>`,
		"article2": `
		<h2>In-Form Full-Back Ciarán Griffin wins 5 A-Side Shield in Late Replacement Appearance</h2>
		<p>New arrival Ciarán has settled into the Celbridge Town side nicely these last months, although it seems he has found footballing success outside of the club also. When he was called upon on late-notice to make up numbers for the injury-riddled "Soup" 5-a-side team, the versatile defender stepped up to lead the team to shield gold on the day.</p>`,
		"article3": `
		<h2>Club Captain Jamie Keane Releases Highly-Sought After Leg Workout</h2>
		<p>After continous weeks of compliments during team warm-ups and stretching, our club captain has decided to release the secret to his illusive gym routine. The exercises are said to include bulgarian split squats, hamstring curls and RDLS.</p>`,
		"article4": `
		<h2>Rumour Mill: Is Club Legend Cian Mulligan Eyeing an Early 2025 Return?</h2>
		<p>Leaks have spread that OG midfielder Cian Mulligan is discussing a club return after the Christmas break. According to credible sources, the excessive sweater is adamant current CDM Tolu "lacks the physicality" to play in such an important role, leaving Mulligan set to make his presence known again come January.</p>`,
		"article5": `
		<h2>Former Starting Centre-Back Tadhg Molloy Tells his Side of Controversial Club Exit</h2>
		<p>In an exclusive sit-down interview with the local news, the no-nonsense centre half shared the "lack of love" he felt from a club he endeared himself to. Molloy likened the situation to how Sergio Ramos was treated when leaving Real Madrid, stating manager Don quickly transitioned from singing his praises, to asking him to leave the WhatsApp groupchat, even hinting at potential nepoitsm involving his son, Ben.</p>`,
	};
const newsItems = document.querySelectorAll('.news-item');
const modal = document.getElementById('articleModal');
const closeButton = document.getElementById('closeModal');
const contentDiv = document.getElementById('articleContent');

newsItems.forEach(item => {
	item.addEventListener('click',function (e) {
		e.preventDefault();

		const articleId = this.getAttribute('data-article');
		contentDiv.innerHTML = articles[articleId] || '<p>Content not available.</p>';

		modal.style.display = 'flex';
	});
});

closeButton.addEventListener('click',function() {
	modal.style.display = 'none'
});

window.addEventListener('click',function (e) {
	if (e.target === modal) {
		modal.style.display = 'none' ;
	}
});
});



