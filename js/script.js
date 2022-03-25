var nome = ""
        function calc() {
            nome = window.document.querySelector('input#nome').value
            var p = window.document.querySelector('input#peso')
            var a = window.document.querySelector('input#altura')
            var res = document.querySelector("div#res")
            var status = document.querySelector("div#status")

            var n1 = Number(p.value)
            var n2 = Number(a.value)
            var s = n1 / (n2 ** 2);

            res.innerHTML = `Olá ${nome}, seu IMC é de: ${s.toFixed(2)}`
            if (s <= 18.49) {
                status.innerHTML = 'Déficit de massa corporal'
            } else if (s >= 18.5 && s <= 24.9) {
                status.innerHTML = 'Massa corporal normal'

            } else if (s >= 25 && s <= 29.9) {
                status.innerHTML = 'Sobrepeso'

            } else if (s >= 30 && s <= 34.9) {
                status.innerHTML = 'Obesidade leve'

            } else if (s >= 35 && s <= 39.9) {
                status.innerHTML = 'Obesidade média'

            } else if (s >= 40) {
                status.innerHTML = 'Obesidade mórbida'
            }
        }