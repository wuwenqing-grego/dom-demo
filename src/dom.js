window.dom = {}

dom.create = function(html) {
    const container = document.createElement('template')
    container.innerHTML = html.trim()
    return container.content.firstChild
}

dom.after = function(node, brother) {
    node.parentNode.insertBefore(brother, node.nextSibling)
}

dom.before = function(node, brother) {
    node.parentNode.insertBefore(brother, node)
}

dom.append = function(parent, child) {
    parent.appendChild(child)
}

dom.wrap = function(node, parent) {
    dom.before(node, parent)
    dom.append(parent, node)
}

dom.remove = function(node) {
    node.parentNode.removeChild(node)
    return node
}

dom.empty = function(node) {
    const arr = []
    while (node.firstChild) {
        arr.push(dom.remove(node.firstChild))
    }
    return arr
}

dom.attr = function(node, name, value) {
    if (arguments.length === 3) {
        node.setAttribute(name, value)
    } else {
        return node.getAttribute(name)
    }
}

dom.text = function(node, text) {
    if (arguments.length === 2) {
        node.innerText = text
    } else {
        return node.innerText
    }
}

dom.html = function(node, html) {
    if (arguments.length === 2) {
        node.innerHTML = html
    } else {
        return node.innerHTML
    }
}

dom.style = function(node, name, value) {
    if (arguments.length === 3) {
        node.style[name] = value
    } else if (arguments.length === 2) {
        if (typeof name === 'string') {
            return node.style[name]
        } else if (name instanceof Object) {
            const object = name
            for (let key in object) {
                node.style[key] = object[key]
            }
        }
    }
}

dom.class = {
    add(node, className) {
        node.classList.add(className)
    },
    remove(node, className) {
        node.classList.remove(className)
    },
    has(node, className) {
        return node.classList.contains(className)
    }
}

dom.on = function(node, eventName, fn) {
    node.addEventListener(eventName, fn)
}

dom.off = function(node, eventName, fn) {
    node.removeEventListener(eventName, fn)
}

dom.find = function(selector, scope) {
    return (scope || document).querySelectorAll(selector)
}

dom.parent = function(node) {
    return node.parentNode
}

dom.children = function(node) {
    return node.children
}

dom.siblings = function(node) {
    return Array.from(node.parentNode.children).filter(item => item !== node)
}

dom.next = function(node) {
    return node.nextSibling
}

dom.previous = function(node) {
    return node.previousSibling
}

dom.each = function(nodeList, fn) {
    Array.from(nodeList).forEach(node => fn(node))
}

dom.index = function(node) {
    return Array.from(node.parentNode.children).indexOf(node)
}