find .|grep "/dist$"|awk -F" " '{print "rm -rv \""$0"\""}'|sh
find .|grep "/_dist$"|awk -F" " '{print "rm -rv \""$0"\""}'|sh
find .|grep "/_build$"|awk -F" " '{print "rm -rv \""$0"\""}'|sh
