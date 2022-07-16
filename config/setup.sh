SFUSER=1234
SFPASS=1234
SFGITCLONEPROJ=gitcloneproj



if [ $1 == $SFUSER ] && [ $2 == $SFPASS ] && [ $3 == $SFGITCLONEPROJ]; then
echo "Telechargement du projet."
git clone https://github.com/Narvak/lib-crypto_css.git
echo "Le projet est telechargé."


fi