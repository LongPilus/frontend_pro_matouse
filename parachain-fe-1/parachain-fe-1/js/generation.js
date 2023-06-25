



function generateItem(item_name, item_id, item_amount) {

    item_similae = co2ComparisonOutput(item_amount)
    item_amount = formatNumber(item_amount) + " kg"

    html = `

    <div class='item'>

        <div class='item_name item_property'>${item_name}</div>
        <div class='item_id item_property'>${item_id}</div>
        <div class='item_similae item_property'>${item_similae}</div>
        <div class='item_amount item_property'>${item_amount}</div>

    </div>

    `

    document.getElementById("itemList").innerHTML += html;


}


window.onload


