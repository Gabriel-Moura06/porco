var PorquinhoDigital = /** @class */ (function () {
    function PorquinhoDigital(saldo, objetivo) {
        this.saldo = saldo;
        this.objetivo = objetivo;
    }
    PorquinhoDigital.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    PorquinhoDigital.prototype.retirar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente. Não é possível retirar essa quantia.");
        }
    };
    PorquinhoDigital.prototype.definirObjetivo = function (valor) {
        this.objetivo = valor;
    };
    PorquinhoDigital.prototype.verificarProgresso = function () {
        var faltaParaObjetivo = this.objetivo - this.saldo;
        if (faltaParaObjetivo > 0) {
            console.log("Falta economizar $".concat(faltaParaObjetivo.toFixed(2), " para atingir o objetivo de $").concat(this.objetivo.toFixed(2), "."));
        }
        else if (faltaParaObjetivo === 0) {
            console.log("Parabéns! Você atingiu seu objetivo.");
        }
        else {
            console.log("Você já atingiu seu objetivo. Continue economizando para mais conquistas.");
        }
    };
    return PorquinhoDigital;
}());
var meuPorquinho = new PorquinhoDigital(50, 200);
meuPorquinho.depositar(30);
meuPorquinho.retirar(20);
meuPorquinho.definirObjetivo(300);
meuPorquinho.verificarProgresso();
