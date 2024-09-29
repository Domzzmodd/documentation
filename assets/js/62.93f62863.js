(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{323:function(e,t,r){"use strict";r.r(t);var s=r(15),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#reading-error-logs"}},[e._v("Reading Error Logs")]),t("ul",[t("li",[t("a",{attrs:{href:"#parsing-the-error"}},[e._v("Parsing the Error")])]),t("li",[t("a",{attrs:{href:"#understanding-the-error"}},[e._v("Understanding the Error")])]),t("li",[t("a",{attrs:{href:"#utilizing-grep"}},[e._v("Utilizing GREP")])])])]),t("li",[t("a",{attrs:{href:"#cannot-connect-to-server-errors"}},[e._v("Cannot Connect to Server Errors")]),t("ul",[t("li",[t("a",{attrs:{href:"#basic-debugging-steps"}},[e._v("Basic Debugging Steps")])]),t("li",[t("a",{attrs:{href:"#more-advanced-debugging-steps"}},[e._v("More Advanced Debugging Steps")])])])]),t("li",[t("a",{attrs:{href:"#invalid-mac-exception"}},[e._v("Invalid MAC Exception")])]),t("li",[t("a",{attrs:{href:"#selinux-issues"}},[e._v("SELinux Issues")]),t("ul",[t("li",[t("a",{attrs:{href:"#redis-permissions-errors"}},[e._v("Redis Permissions Errors")])]),t("li",[t("a",{attrs:{href:"#wings-connection-errors"}},[e._v("Wings Connection Errors")])])])]),t("li",[t("a",{attrs:{href:"#containers-don-t-have-internet-probably-a-dns-issue"}},[e._v("Containers don't have internet? Probably a DNS issue!")])]),t("li",[t("a",{attrs:{href:"#schedule-troubleshooting"}},[e._v("Schedule Troubleshooting")])]),t("li",[t("a",{attrs:{href:"#firewalld-issues"}},[e._v("FirewallD issues")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"reading-error-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reading-error-logs"}},[e._v("#")]),e._v(" Reading Error Logs")]),e._v(" "),t("p",[e._v("If you ever encounter an unexpected error with the Panel the first thing you will likely be asked for is the logs.\nTo retrieve these, simply execute the command below which will output the last 100 lines of the Panel's log file.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tail")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" /var/www/pterodactyl/storage/logs/laravel-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%F"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(".log\n")])])]),t("h3",{attrs:{id:"parsing-the-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parsing-the-error"}},[e._v("#")]),e._v(" Parsing the Error")]),e._v(" "),t("p",[e._v("When you run the command above, you'll probably be hit with a huge wall of text that might scare you. Fear not,\nthis is simply a stacktrace leading to the cause of the error, and you can actually ignore almost all of it when\nlooking for the cause of the error. Lets take a look at some example output below, which has been truncated to\nmake this easier to follow with.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#70 /srv/www/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(116): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#71 /srv/www/public/index.php(53): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#72 {main}\n[2018-07-19 00:50:24] local.ERROR: ErrorException: file_put_contents(/srv/www/storage/framework/views/c9c05d1357df1ce4ec8fc5df78c16c493b0d4f48.php): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122\nStack trace:\n#0 [internal function]: Illuminate\\Foundation\\Bootstrap\\HandleExceptions->handleError(2, 'file_put_conten...', '/srv/www/vendor...', 122, Array)\n#1 /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php(122): file_put_contents('/srv/www/storag...', '<?php $__env->s...', 0)\n#2 /srv/www/vendor/laravel/framework/src/Illuminate/View/Compilers/BladeCompiler.php(122): Illuminate\\Filesystem\\Filesystem->put('/srv/www/storag...', '<?php $__env->s...')\n#3 /srv/www/vendor/laravel/framework/src/Illuminate/View/Engines/CompilerEngine.php(51): Illuminate\\View\\Compilers\\BladeCompiler->compile('/srv/www/resour...')\n#4 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(142): Illuminate\\View\\Engines\\CompilerEngine->get('/srv/www/resour...', Array)\n#5 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(125): Illuminate\\View\\View->getContents()\n")])])]),t("p",[e._v("The first thing you'll want to do is follow the chain of numbers "),t("em",[e._v("up")]),e._v(" until you find "),t("code",[e._v("#0")]),e._v(", this will be the function that\ntriggered the exception. Right above line 0 you will see a line that has the date and time in brackets, "),t("code",[e._v("[2018-07-19 00:50:24]")]),e._v("\nabove for example. This line will be the human readable exception that you can use to understand what went wrong.")]),e._v(" "),t("h3",{attrs:{id:"understanding-the-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-error"}},[e._v("#")]),e._v(" Understanding the Error")]),e._v(" "),t("p",[e._v("In the example above we can see that the actual error was:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("local.ERROR: ErrorException: file_put_contents(...): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122\n")])])]),t("p",[e._v("From this error we can determine that there was an error performing a "),t("a",{attrs:{href:"http://php.net/manual/en/function.file-put-contents.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("file_put_contents()"),t("OutboundLink")],1),e._v(" call, and the error was\nthat we couldn't open the file because permissions were denied. Its okay if you don't understand the error at all, but\nit does help you get faster support if you're able to provide these logs, and at least find the source of the error.\nSometimes the errors are pretty straightforward and will tell you exactly what went wrong, such as a "),t("code",[e._v("ConnectionException")]),e._v("\nbeing thrown when the Panel can't connect to the Daemon.")]),e._v(" "),t("h3",{attrs:{id:"utilizing-grep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utilizing-grep"}},[e._v("#")]),e._v(" Utilizing GREP")]),e._v(" "),t("p",[e._v("If you're trying to go through a bunch of errors quickly, you can use the command below which will limit the results returned to only\nbe the actual error lines, without all of the stack traces.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tail")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v(" /var/www/pterodactyl/storage/logs/laravel-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%F"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(".log "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\['),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%Y"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v("\n")])])]),t("h2",{attrs:{id:"cannot-connect-to-server-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cannot-connect-to-server-errors"}},[e._v("#")]),e._v(" Cannot Connect to Server Errors")]),e._v(" "),t("h3",{attrs:{id:"basic-debugging-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-debugging-steps"}},[e._v("#")]),e._v(" Basic Debugging Steps")]),e._v(" "),t("ul",[t("li",[e._v("Check that Wings is running, and not reporting errors. Use "),t("code",[e._v("systemctl status wings")]),e._v(" to check the current status of\nthe process.")]),e._v(" "),t("li",[e._v("Check your browser's console by pressing "),t("code",[e._v("Ctrl + Shift + J")]),e._v(" (in Chrome) or "),t("code",[e._v("Cmd + Alt + I")]),e._v(" (in Safari). If there is\na red error in it, chances are that it will narrow down the potential problem.")]),e._v(" "),t("li",[e._v("Make sure Wings is properly installed and the active configuration matches the configuration shown under\n"),t("code",[e._v("Admin -> Node -> Configuration")]),e._v(" in the Panel.")]),e._v(" "),t("li",[e._v("Check that the Wings ports are open on your firewall. Wings uses ports "),t("code",[e._v("8080")]),e._v(" or "),t("code",[e._v("8443")]),e._v(" for HTTP(s) traffic,\nand "),t("code",[e._v("2022")]),e._v(" for SFTP traffic.")]),e._v(" "),t("li",[e._v("Ensure you have AdBlock disabled or whitelisted for your Panel and Wings domains.")]),e._v(" "),t("li",[e._v("Check that the Panel can reach Wings using the domain that is configured on the Panel. Run "),t("code",[e._v("curl https://domain.com:8080")]),e._v(" on the Panel server and ensure that it can successfully connect to Wings.")]),e._v(" "),t("li",[e._v("Ensure that you are using the correct HTTP scheme for your Panel and Wings. If the Panel is running over HTTPS\nWings will also need to be running on HTTPS.")])]),e._v(" "),t("h3",{attrs:{id:"more-advanced-debugging-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-advanced-debugging-steps"}},[e._v("#")]),e._v(" More Advanced Debugging Steps")]),e._v(" "),t("ul",[t("li",[e._v("Stop Wings and run "),t("code",[e._v("wings --debug")]),e._v(" to see if there are any errors being output. If so, try resolving them manually,\nor reach out on "),t("a",{attrs:{href:"https://discord.gg/pterodactyl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),t("OutboundLink")],1),e._v(" for more assistance.")]),e._v(" "),t("li",[e._v("Check your DNS and ensure that the response you receive is the one you expect using a tool such as "),t("code",[e._v("nslookup")]),e._v(" or "),t("code",[e._v("dig")]),e._v(".")]),e._v(" "),t("li",[e._v("If you use CloudFlare make sure that the orange cloud is disabled for your Wings or Panel "),t("code",[e._v("A")]),e._v(" records.")]),e._v(" "),t("li",[e._v("Make sure when using Wings behind a firewall — pfSense, OpenSwitch, etc. — that the correct NAT settings to access\nthe Wing's ports from the outside network are setup.")]),e._v(" "),t("li",[e._v("If nothing is working so far, check your own DNS settings and consider switching DNS servers.")]),e._v(" "),t("li",[e._v("When running the Panel and Wings on one server it can sometimes help if to add an entry in "),t("code",[e._v("/etc/hosts")]),e._v(" that directs\nthe public IP back to the server. Sometimes the reverse path is also needed, so you may need to add an entry to your\nservers "),t("code",[e._v("/etc/hosts")]),e._v(" file that points the Panel's domain to the correct IP.")]),e._v(" "),t("li",[e._v("When running Wings and the Panel on separate VM's using the same adapter make sure the VM's can connect to each\nother. Promiscuous mode might be needed.")])]),e._v(" "),t("h2",{attrs:{id:"invalid-mac-exception"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invalid-mac-exception"}},[e._v("#")]),e._v(" Invalid MAC Exception")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("This error should never happen if you correctly follow our installation and upgrade guides. The only time we have\never seen this error occur is when you blindly restore the Panel database from a backup and try to use a fresh\ninstallation of the Panel.")]),e._v(" "),t("p",[e._v("When restoring backups you should "),t("em",[e._v("always")]),e._v(" restore the "),t("code",[e._v(".env")]),e._v(" file!")])]),e._v(" "),t("p",[e._v("Sometimes when using the Panel you'll unexpectedly encounter a broken page, and upon checking the logs you'll see\nan exception mentioning an invalid MAC when decrypting. This error is caused by mismatched "),t("code",[e._v("APP_KEY")]),e._v("s in your "),t("code",[e._v(".env")]),e._v(" file\nwhen the data was encrypted versus decrypted.")]),e._v(" "),t("p",[e._v("If you are seeing this error the only solution is to restore the "),t("code",[e._v("APP_KEY")]),e._v(" from your "),t("code",[e._v(".env")]),e._v(" file. If you have lost that\noriginal key there is no way to recover the lost data.")]),e._v(" "),t("h2",{attrs:{id:"selinux-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selinux-issues"}},[e._v("#")]),e._v(" SELinux Issues")]),e._v(" "),t("p",[e._v("On systems with SELinux installed you might encounter unexpected errors when running redis or attempting to connect\nto the daemon to perform actions. These issues can generally be resolved by executing the commands below to allow\nthese programs to work with SELinux.")]),e._v(" "),t("h3",{attrs:{id:"redis-permissions-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-permissions-errors"}},[e._v("#")]),e._v(" Redis Permissions Errors")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("audit2allow "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-a")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-M")]),e._v(" redis_t\nsemodule "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" redis_t.pp\n")])])]),t("h3",{attrs:{id:"wings-connection-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wings-connection-errors"}},[e._v("#")]),e._v(" Wings Connection Errors")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("audit2allow "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-a")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-M")]),e._v(" http_port_t\nsemodule "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" http_port_t.pp\n")])])]),t("h2",{attrs:{id:"containers-don-t-have-internet-probably-a-dns-issue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#containers-don-t-have-internet-probably-a-dns-issue"}},[e._v("#")]),e._v(" Containers don't have internet? Probably a DNS issue!")]),e._v(" "),t("p",[e._v("Now that Wings has run successfully and you have gotten the green heart on your Nodes page, the wings config at '/etc/pterodactyl/config.yml' will have new values.\nOne of those values is DNS, which by default will be 1.1.1.1 and 1.0.0.1\nIf you are using a host that blocks Cloudflare DNS, you will have to use different DNS Servers; typically the same ones your host system is using.\nYou can view what DNS Servers your host uses through a number of ways depending on how your operating system handles networking. If one of these doesn't work, try another one.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Network Manager (This will show both your IPV4 DNS and IPV6 DNS Servers in case you want to add the IPV6 DNS Server(s) from your host to your Wings Config as well.")]),e._v("\nnmcli "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-g")]),e._v(" ip4.dns,ip6.dns dev show\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Systemd-Resolve (Ubuntu 18.04 and 20.04)")]),e._v("\nsystemd-resolve "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--status")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Resolve-CTL (Newer Versions of Ubuntu)")]),e._v("\nresolvectl status\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Raw file locations that may have your host system's DNS Servers for various distributions")]),e._v("\n/etc/resolv.conf\n/etc/network/interfaces\n")])])]),t("p",[e._v("If this returns different DNS Servers than 1.1.1.1 and 1.0.0.1 you'll need to edit the wings 'config.yml' file to use the DNS servers that were returned from the command. If you see output that looks like an IPV6 address in addition to your IPV4 DNS Servers, make sure you put that in the IPV6 section and not the IPV4 section. To be clear, if you have to use different DNS Servers than the default, make sure to REMOVE 1.1.1.1 and 1.0.0.1 from the wings config; don't just add the new servers, replace the old servers.")]),e._v(" "),t("h2",{attrs:{id:"schedule-troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schedule-troubleshooting"}},[e._v("#")]),e._v(" Schedule Troubleshooting")]),e._v(" "),t("ul",[t("li",[e._v("Check logs from your queue manager "),t("code",[e._v("journalctl -xeu pteroq")])]),e._v(" "),t("li",[e._v("Restart pteroq "),t("code",[e._v("systemctl restart pteroq")])]),e._v(" "),t("li",[e._v("Clear schedule cache "),t("code",[e._v("php /var/www/pterodactyl/artisan schedule:clear-cache")])]),e._v(" "),t("li",[e._v("Check your php version - up to 8.1 is supported "),t("code",[e._v("php -v")])]),e._v(" "),t("li",[e._v("Check your crontab syntax using "),t("a",{attrs:{href:"https://crontab.guru/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://crontab.guru/"),t("OutboundLink")],1),e._v(" - make sure it's what you intended")]),e._v(" "),t("li",[e._v("Verify the problem is with the schedule and not with the tasks you have set up (Set the first task in your schedule to something you know prints a message in the console, ie. run "),t("code",[e._v("say test")]),e._v(' in the console for a Minecraft server, if the text "test" shows up in the console successfully, set the first task to '),t("code",[e._v("say test")]),e._v(" so you know if it runs")]),e._v(" "),t("li",[e._v("Are your tasks off by a bit? Make sure you on the latest version of the panel? In version 1.11.5 there was a fix for schedules running at the wrong time. Alternatively, you may have the wrong timezone set. Make sure your timezones all match.")]),e._v(" "),t("li",[e._v("System Timezone "),t("code",[e._v("timedatectl")])]),e._v(" "),t("li",[e._v("Panel Timezone "),t("code",[e._v("nano /var/www/pterodactyl/.env")])]),e._v(" "),t("li",[e._v("Wings Timezone (Passed to containers as the TZ environmental variable, unrelated to schedules but while you're checking timezones you may as well set this too) "),t("code",[e._v("nano /etc/pterodactyl/config.yml")])]),e._v(" "),t("li",[e._v("Check your database where schedules are stored - MariaDB by default")]),e._v(" "),t("li",[t("code",[e._v("systemctl status mariadb")]),e._v(" - if it's not active, "),t("code",[e._v("journalctl -xeu mariadb")])]),e._v(" "),t("li",[e._v("Check queue handler - Redis by default")]),e._v(" "),t("li",[t("code",[e._v("systemctl status redis")]),e._v(" - if it's not active, "),t("code",[e._v("journalctl -xeu redis")]),e._v(" (On some distributions the service will be named "),t("code",[e._v("redis-server")]),e._v(" instead)")]),e._v(" "),t("li",[e._v("Check for panel errors "),t("code",[e._v("tail -n 150 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | nc pteropaste.com 99")])])]),e._v(" "),t("h2",{attrs:{id:"firewalld-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firewalld-issues"}},[e._v("#")]),e._v(" FirewallD issues")]),e._v(" "),t("p",[e._v("If you are on a RHEL/CentOS server with "),t("code",[e._v("firewalld")]),e._v(" installed you may have broken DNS.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0\nfirewall-cmd --reload\n")])])]),t("p",[e._v("Restart "),t("code",[e._v("docker")]),e._v(" and "),t("code",[e._v("wings")]),e._v(" after running these to be sure the rules are applied.")])])}),[],!1,null,null,null);t.default=a.exports}}]);