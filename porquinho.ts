class PorquinhoDigital {
    saldo: number;
    objetivo: number;

    constructor(saldo: number, objetivo: number) {
        this.saldo = saldo;
        this.objetivo = objetivo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    retirar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente. Não é possível retirar essa quantia.");
        }
    }

    definirObjetivo(valor: number): void {
        this.objetivo = valor;
    }

    verificarProgresso(): void {
        const faltaParaObjetivo = this.objetivo - this.saldo;
        if (faltaParaObjetivo > 0) {
            console.log(`Falta economizar $${faltaParaObjetivo.toFixed(2)} para atingir o objetivo de $${this.objetivo.toFixed(2)}.`);
        } else if (faltaParaObjetivo === 0) {
            console.log("Parabéns! Você atingiu seu objetivo.");
        } else {
            console.log("Você já atingiu seu objetivo. Continue economizando para mais conquistas.");
        }
    }
}


const meuPorquinho = new PorquinhoDigital(50, 200); 
meuPorquinho.depositar(30); 
meuPorquinho.retirar(20); 
meuPorquinho.definirObjetivo(300); 
meuPorquinho.verificarProgresso(); 
