const mostraNome = nome => `O nome é, ${nome}`;

function nomeMostra(nome){
	console.log(mostraNome(nome))
}

module.exports.nomeExibido = nomeMostra;