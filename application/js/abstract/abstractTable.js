export const renderTable =  (options, data, rowmapper) => {
    let res = `
<tr>`;
    options.forEach(col => res += `
    <th align="center"${col.colWidth != undefined ? ' width="'+col.colWidth+'"' : ''}>${col.colName}</th>`);

    res += 
`
</tr>
`;
    data.forEach(element => res += rowmapper(element));
    return res;
};