while IFS="," read -r id last_name first_name email price country
do
  if [[ $email == *"@amazon"* ]]; then
    echo "$first_name $last_name"
  fi
  if [[ $email == *"@Amazon"* ]]; then
    echo "$first_name $last_name"
  fi
done