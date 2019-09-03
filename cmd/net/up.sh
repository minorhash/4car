usr=admin
pss=bulk2010
host=tmsm.bulks.jp

lftp -u $usr,$pss $host -e "\
cd exp/biz/sch
pwd
lcd ..
lpwd
# mirror -R vie
# mirror -R rot
# mirror -R pub
mirror -R wk4

# cd node_modules
# lcd node_modules
# mirror -R cardb
# mirror -R usrdb
exit"
