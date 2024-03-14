import { createContext, useState } from "react";  


export const PedidoContext = createContext({});

export function PedidoProvider({ children }) {

    const [saldo, setSaldo] = useState(0);
    const [total, setTotal] = useState(0);
    const [valorFinal, setValorFinal] = useState(0);
    const [totalItens, setTotalItens] = useState(0);
    const [comanda, setComanda] = useState({});


    const addProduto = (produto) => {
        setTotal(total + produto.preco);
        setValorFinal(saldo + produto.preco + total);
        setTotalItens(totalItens + 1);
    }

    const removeProduto = (produto) => {
        setTotal(total - produto.preco);
        setValorFinal(saldo - produto.preco + total);
        setTotalItens(totalItens - 1);
    }

    const loadComanda = (comanda) => {
        setComanda(comanda);
        setSaldo(comanda.saldo);
    }

    return (
        <PedidoContext.Provider value={{
            saldo, 
            total,
            comanda,
            valorFinal, 
            totalItens, 
            addProduto, 
            removeProduto,
            loadComanda
        }}>
            {children}
        </PedidoContext.Provider>
    )
}