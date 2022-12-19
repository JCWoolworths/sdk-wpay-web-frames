# sdk-wpay-edpay-web-frames

## INSTALLATION

```shell
# if you don't have the registry for our scope
echo "@w-pay:registry=https://npm.pkg.github.com" >> .npmrc
# verify details
npm config list

# And! Our SDK
npm install @w-pay/sdk-wpay-edpay-web-frames
```

If you receive an error similar to `authentication token not provided`, you will need to load up a GitHub Personal Access Token for your login. The steps are as follows:

1. Visit your [GitHub Token Settings]()
2. Generate a new token for `read:packages`
3. On your terminal, use the command
   ```shell
   npm login --scope=@w-pay --registry=https://npm.pkg.github.com
   ```
4. And enter in your GitHub username and the password would be the token generated on step 2.

> **_Note:_** For backwards compatibility, NPM packages would continue to
> be published to the [NPM Repository](https://www.npmjs.com/package/@wpay/frames).
> However, the dual-publishing is due to be sunset.

## Usage

In the component you want to implement add the following lines:

```
 const EverydayPay = FramesSDK.widgets.everydayPay.new({
      elementId: "everyday-pay-sdk",
      accessToken: "KzqkXHSNcUA2WDLBJqRH3N1YRSk2",
      apiKey: "jVFxCbli459dNGLajUhsIZKrJJjThOpY",
      baseURL: BASE_URLS.Local,
      shopperId: "1100000000093129999",
      username: "1100000000093129999",
    });
    EverydayPay.render();

    //To unmount:
    EverydayPay.unmount();
```

Configuration options:

**elementId** - Id of the element in which you want to render the SDK\
**accessToken(optional if you have a rewards token)**: access token needed to authorize using everyday pay wallet\
**rewardsToken(optional)** - Rewards token use to get the access token if you don't have an access token already.\
**baseURL** - bare url for the service endpoints the SDK will interact with.\
**apiKey** - key for the api you want to point SDK to use.\
**shopperId** - Used to identify the user.\
**username** - Used to identify the user.

## RUN MOCK SERVER

Navigate to mockServer folder and run:

### `npm i`

Open your terminal and run:

```console
curl --location --request POST '<url to get access token>' \
--header 'X-Api-Key: <api key> \
--header 'Content-Type: application/json' \
--header 'Cookie: \_abck=79ED898BA5188D08646999B4DE8EFDC1~-1~YAAQpPI3FwA7fQGDAQAAhY8RFggsz/3Ia2uupQ/CUwskxqVikkUsLbnwNAfTYMVZZYP0375uySUCSY+6b3OVSt7bFMRs609S3DDmUnlpyR+VY8z09z3UbPZ6QfRPE0lcxeSQ0ZXe0WtryxF014h4rwWrjX8LiceuSz+/P8WjvEohhbkwPmeLDtX21GS1XC1ruh4JpDjbK40O0N5agghapcBW/2kO3V1c5z0UXR8dGiVM+sEGR/Gk90ipCWGNnJV0ijF21nWcSM+9ititDb7zuUszDY47MSitrInzkN44gYjdn4Z411Q+NPfcFJg2PGlMmUtp2Gl07DiTuBuPcgrYcot70Ao4FjjF5bT6WSRg+wKkhPilCPa2gAckohv4jpuBCl0k4LavNQ12G7YrZVc=~-1~-1~-1' \
--data-raw '{
"shopperId": "1100000000093129999",
"username": "1100000000093129999"
}'
```

Copy the response and navigate to the index file inside mockServer folder,
then on lines 95 to 103 replace the object passed to res.send with the response.

### `npm start`

Navigate to the root and run:

### `npm run buildsdk`

## TEST IN REACT APPLICATION:

Navigate to react-test-simulator and run:

### `npm i`

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## TEST IN VUE APPLICATION:

Navigate to vue-test-simulator and run:

### `npm i`

### `npm run serve`

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
