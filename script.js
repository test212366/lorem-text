data = [
	{
		text: `По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых
		людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском
		языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.`
	},
	{
		text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil asperiores totam ipsum sit unde rerum
		voluptatem doloribus atque non eveniet, odio nemo animi? Ea minima accusamus sequi! Praesentium, harum
		magni?`
	},
	{
		text: `Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но
		является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения
		образца шрифтов, создания текста для тестирования или обхода спам-фильтра`
	},
	{
		text: `Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
		осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в
		домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст
		генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать
		текст более привлекательным и живым для визуально-слухового восприятия.`
	},
]
const input = document.querySelector('.input'),
	paragraps = document.querySelector('.paragraps')

function sentForm(e) {
	e.preventDefault()
	const values = input.value
	if (values > data.length || values <= 0) {
		paragraps.innerHTML = ''
		return
	} else {
		paragraps.innerHTML = ''
		for (let i = 0; i < values; i++) {
			const item = data[i];
			const itemWrap = document.createElement('p')
			itemWrap.textContent = item.text
			paragraps.appendChild(itemWrap)
		}
	}
}
const form = document.querySelector('.form')
form.addEventListener('submit', sentForm)