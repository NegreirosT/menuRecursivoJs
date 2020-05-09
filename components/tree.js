export default function(data)
{
    const tree = document.querySelector("nav#tree")
    const ul   = document.createElement("ul")
    const firstLevel = data.filter(item => !item.parent)
    const getFirstLevelList = firstLevel.map(buildTree)    
    
    getFirstLevelList.forEach(li => ul.append(li))

    function buildTree(element)
    {
        const li   = document.createElement("li")
        li.innerHTML = element.name

        const children = data.filter(child => child.parent === element.id)

        if(children.length > 0)
        {
            // Adicionando o evento de click
            li.addEventListener('click', event => {
                event.stopPropagation() // Olha somente o evento por vez
                event.target.classList.toggle('open')
            });


            li.classList.add("has-children")
            const subMenu = document.createElement("ul")
            children.map(buildTree).forEach(li => subMenu.append(li));
            li.append(subMenu)
        }


        return li
    }

    // Aqui eu estou colocando meu ul dentro da minha div nav#tree
    tree.append(ul)
}