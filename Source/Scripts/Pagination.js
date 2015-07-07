
// Created by Basker
// custom pagination for data controls
function Pagination(totalCount, pageIndex) {
    $('#tblPagination').html('');
    var table = document.getElementById("tblPagination");
    var row = table.insertRow(0); row.setAttribute('id', 'trPagination')
    var id = 1;
    var totalRecord = totalCount;
    var currentPage = pageIndex;
    var pageSize = 10;
    var pageCount = totalRecord / pageSize;
    pageCount = Math.ceil(pageCount);
    if (pageCount > 10) {
        if (currentPage <= 10) {
            if (currentPage != 1) {
                var position = 0;
                var first = row.insertCell(position); var prevPage = currentPage - 1;
                first.innerHTML = "First"; first.setAttribute('onclick', "PageClick('1');"); first.setAttribute('id', id);
                if (currentPage > 1) {
                    first.setAttribute("class", "Cursor");
                } else {
                    first.setAttribute("class", "CurrentPage");
                }
                var prev = row.insertCell(position++);
                prev.innerHTML = "Prev"; prev.setAttribute('onclick', "PageClick(" + prevPage + ");"); prev.setAttribute('id', id + 1);
                if (currentPage > 1) {
                    prev.setAttribute("class", "Cursor");
                } else {
                    prev.setAttribute("class", "CurrentPage");
                }
            }
            else {
                var id = 0;
            }

            for (var i = 1; i <= 10; i++) {

                position = position + 1; id = id + 1;
                var td = row.insertCell(position);
                td.innerHTML = i;
                td.setAttribute('onclick', "PageClick(" + i + ");");
                td.setAttribute('id', id);
                if (i != currentPage) {
                    td.setAttribute("class", "Cursor");
                }
                else {
                    td.setAttribute("class", "CurrentPage");
                }
            }
            var next = row.insertCell(position++); id = id + 1; var nextpage = currentPage + 1;
            next.innerHTML = "Next"; next.setAttribute('onclick', "PageClick(" + nextpage + ");");
            next.setAttribute('id', id);
            if (currentPage < pageCount) {
                next.setAttribute("class", "Cursor");
            }
            else {
                next.setAttribute("class", "CurrentPage");
            }
            var last = row.insertCell(position++);
            last.innerHTML = "Last"; last.setAttribute('onclick', "PageClick(" + pageCount + ");"); id = id + 1;
            last.setAttribute('id', id);
            $("#trPagination > td").tsort("", { attr: "id" });
            if (currentPage < pageCount) {
                last.setAttribute("class", "Cursor");
            }
            else {
                last.setAttribute("class", "CurrentPage");
            }
        }
        else {
            var temp = pageCount - currentPage;
            if (temp > 10) {
                var position = 0;
                var first = row.insertCell(position); var prevPage = currentPage - 1;
                first.innerHTML = "First"; first.setAttribute('onclick', "PageClick('1');"); first.setAttribute('id', id);
                if (currentPage > 1) {
                    first.setAttribute("class", "Cursor");
                } else {
                    first.setAttribute("class", "CurrentPage");
                }
                var prev = row.insertCell(position++);
                prev.innerHTML = "Prev"; prev.setAttribute('onclick', "PageClick(" + prevPage + ");}"); prev.setAttribute('id', id + 1);
                if (currentPage > 1) {
                    prev.setAttribute("class", "Cursor");
                } else {
                    prev.setAttribute("class", "CurrentPage");
                }
                var j = 1;
                for (var i = currentPage; j <= 10; i++) {
                    position++; id++
                    var td = row.insertCell(position);
                    td.innerHTML = i;
                    td.setAttribute('onclick', "PageClick(" + i + ");");
                    td.setAttribute('id', id);

                    if (i != currentPage) {
                        td.setAttribute("class", "Cursor");
                    }
                    else {
                        td.setAttribute("class", "CurrentPage");
                    }
                    j++;
                }
                var next = row.insertCell(position++); id = id + 1; var nextpage = currentPage + 1;
                next.innerHTML = "Next"; next.setAttribute('onclick', "PageClick(" + nextpage + ");");
                if (currentPage < pageCount) {
                    next.setAttribute("class", "Cursor");
                }
                else {
                    next.setAttribute("class", "CurrentPage");
                }
                var last = row.insertCell(position++); next.setAttribute('id', id);
                last.innerHTML = "Last"; last.setAttribute('onclick', "PageClick(" + pageCount + ");"); id = id + 1;
                last.setAttribute('id', id);
                if (currentPage < pageCount) {
                    last.setAttribute("class", "Cursor");
                }
                else {
                    last.setAttribute("class", "CurrentPage");
                }
                $("#trPagination > td").tsort("", { attr: "id" });
            }
            else {
                var position = 0;
                var first = row.insertCell(position); var prevPage = currentPage - 1;
                first.innerHTML = "First"; first.setAttribute('onclick', "PageClick('1');"); first.setAttribute('id', id);
                if (currentPage > 1) {
                    first.setAttribute("class", "Cursor");
                } else {
                    first.setAttribute("class", "CurrentPage");
                }
                var prev = row.insertCell(position++);
                prev.innerHTML = "Prev"; prev.setAttribute('onclick', "PageClick(" + prevPage + ");"); prev.setAttribute('id', id + 1);
                if (currentPage > 1) {
                    prev.setAttribute("class", "Cursor");
                } else {
                    prev.setAttribute("class", "CurrentPage");
                }
                var a = pageCount - currentPage;
                var b = 10 - a;
                var startingPoint = currentPage - b;
                var j = startingPoint;
                for (var i = startingPoint; i <= pageCount; i++) {
                    position++; id++
                    var td = row.insertCell(position);
                    td.innerHTML = i;
                    td.setAttribute('onclick', "PageClick(" + i + ");");
                    td.setAttribute('id', id);
                    if (i != currentPage) {
                        td.setAttribute("class", "Cursor");
                    }
                    else {
                        td.setAttribute("class", "CurrentPage");
                    }
                    j++;
                }
                var next = row.insertCell(position++); id = id + 1; var nextpage = currentPage + 1;
                next.innerHTML = "Next"; next.setAttribute('onclick', "PageClick(" + nextpage + ");");
                if (currentPage < pageCount) {
                    next.setAttribute("class", "Cursor");
                }
                else {
                    next.setAttribute("class", "CurrentPage");
                }
                var last = row.insertCell(position++); next.setAttribute('id', id);
                last.innerHTML = "Last"; last.setAttribute('onclick', "PageClick(" + pageCount + ");"); id = id + 1;
                last.setAttribute('id', id);

                if (currentPage < pageCount) {
                    last.setAttribute("class", "Cursor");
                }
                else {
                    last.setAttribute("class", "CurrentPage");
                }
                $("#trPagination > td").tsort("", { attr: "id" });
            }
        }
    }
    else {
        var position = 0;
        var first = row.insertCell(position);
        first.innerHTML = "First"; first.setAttribute('onclick', "PageClick('1');"); first.setAttribute('id', id);
        if (currentPage > 1) {
            first.setAttribute("class", "Cursor");
        } else {
            first.setAttribute("class", "CurrentPage");
        }
        for (var i = 1; i <= pageCount; i++) {
            position++; id++
            var td = row.insertCell(position);
            td.innerHTML = i;
            td.setAttribute('onclick', "PageClick(" + i + ");");
            td.setAttribute('id', id);
            if (i != currentPage) {
                td.setAttribute("class", "Cursor");
            }
            else {
                td.setAttribute("class", "CurrentPage");
            }
        }
        var last = row.insertCell(pageCount++); id = id + 1;
        last.innerHTML = "Last"; last.setAttribute('onclick', "PageClick(" + pageCount + ");");
        last.setAttribute('id', id);
        if (currentPage < pageCount) {
            last.setAttribute("class", "Cursor");
        }
        else {
            last.setAttribute("class", "CurrentPage");
        }
        $("#trPagination > td").tsort("", { attr: "id" });
    }
}