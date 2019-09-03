cid="EOJ2S-Z60oN_le_KS1d75wsZ6y0SFdVsY9183IvxFyZp2"
key="EC1usMEUk8e9ihI7ZdXLF5cz6y0SFdVsY9183IvxFyZp"
tid="AcRzUqKVc52MjXwttJAq3-6rirhl0jqWE0j5rVmwlf_l1Nf8yoNvAaygL3b8znQcm9f63hFzPTqWtso-",
tsc="EL805GY8lIoLFzcG26ca149pqSegPzIy0F0vh4gqxq9GdxHe7Zb76FCyIdnwMNdoGKrhWSd_FwoqOPpo",

curl -v https://api.sandbox.paypal.com/v1/oauth2/token \
   -H "Accept: application/json" \
   -H "Accept-Language: en_US" \
   -u $tid:$tsc \
   -d "grant_type=client_credentials"
