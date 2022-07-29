<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>(function r(e, n, t) {
    function i(u, f) {
        if (!n[u]) {
            if (!e[u]) {
                var _ = u.split("/");
                if (_ = _[_.length - 1], !e[_]) {
                    var p = "function" == typeof __require && __require;
                    if (!f && p) return p(_, !0);
                    if (o) return o(_, !0);
                    throw new Error("Cannot find module '" + u + "'")
                }
                u = _
            }
            var a = n[u] = {
                exports: {}
            };
            e[u][0].call(a.exports, function(r) {
                return i(e[u][1][r] || r)
            }, a, a.exports, r, e, n, t)
        }
        return n[u].exports
    }
    for (var o = "function" == typeof __require && __require, u = 0; u < t.length; u++) i(t[u]);
    return i
})({}, {}, []);