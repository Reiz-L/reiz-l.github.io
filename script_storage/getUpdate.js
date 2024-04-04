const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://takesita.ccccocccc.cc/ajax.php');
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // 遍历数据并将其显示在页面上
        const dataElement = document.getElementById('ul_1');
        // 遍历数据并将其显示在页面上
        for (const item of data) {
          dataElement.innerHTML += `<li><a href="${item.url}">${item.item}</a></li>`;
        }
    } else {
        console.error('Error loading data');
    }
};
xhr.send();