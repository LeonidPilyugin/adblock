function removeElement(node) {
    node.parentNode.removeChild(node);
}

function isAdd(node) {
    var classname = (node.className !== undefined && node.className.length === 9);
    var idname = (node.id !== undefined && node.id.length === 10);
    return classname || idname;
}

function walkDom(node) {
    if (isAdd(node)) {
        removeElement(node);
        return;
    }

    node = node.firstChild;
    while (node) {
        walkDom(node);
        node = node.nextSibling;
    }
}

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    var app = document.getElementById("app");
    while (true) {
        await sleep(300);
        walkDom(app);
    }
}

run();
