# Comprehensive Setup Guide

This guide covers the steps to create a free email account with your own domain on Zoho and how to host a Next.js application on AWS.

## Creating a Free Email on Zoho with Your Domain

### Step 1: Sign Up for Zoho Mail

1. Go to [Zoho Mail](https://www.zoho.com/mail/).
2. Click on the **"Get Started"** button under the **"Business Email"** section.
3. Select the **"Free Plan"** option.
4. Click **"Sign Up Now"**.

### Step 2: Add Your Domain

1. Enter your domain name when prompted and click **"Add"**.
2. If you don’t have a domain yet, purchase one from a domain registrar like GoDaddy, Namecheap, etc.

### Step 3: Verify Your Domain

1. Choose a verification method (CNAME, TXT, or HTML).
2. Log in to your domain registrar's control panel.
3. Add the provided CNAME or TXT record to your domain's DNS settings.
4. Go back to Zoho and click **"Verify"**.

### Step 4: Create Your Email Accounts

1. Go to the **"User Details"** section and click **"Add User"**.
2. Fill in the required information and click **"OK"**.

### Step 5: Configure MX Records

1. Zoho will provide MX records to add to your domain’s DNS settings.
2. Log in to your domain registrar's control panel.
3. Add the provided MX records and ensure no other MX records are present.
4. Save the changes.

### Step 6: Complete Setup

1. Click **"Next"** after adding the MX records.
2. Zoho will verify the MX records, completing your setup.

### Step 7: Access Your Zoho Mail

1. Access your email via [Zoho Mail](https://mail.zoho.com/) using your email address and password.

### Additional Configuration (Optional - make email tagged verified)

#### Step 1: Configure SPF (Sender Policy Framework)

1. **Log in to your domain registrar's control panel.**
2. **Go to the DNS settings for your domain.**
3. **Add a TXT record with the following details:**
   - **Name/Host/Alias:** @ or your domain name
   - **Value:** `v=spf1 include:zoho.com ~all`
4. **Save the changes.**

#### Step 2: Configure DKIM (DomainKeys Identified Mail)

1. **Log in to Zoho Mail Admin Console.**
2. **Navigate to `Mail Admin Console` > `Domain` > `Authenticate` > `DKIM`.**
3. **Click on `Add Selector`.**
4. **Enter a Selector Name (e.g., `zoho`).**
5. **Click on `Save` and then `View Record` to see the DKIM record details.**
6. **Add a TXT record to your DNS settings with the following details:**
   - **Name/Host/Alias:** `zoho._domainkey` (replace `zoho` with the selector name you used)
   - **Value:** The value provided by Zoho
7. **Save the changes.**

#### Step 3: Configure DMARC (Domain-based Message Authentication, Reporting, and Conformance)

1. **Go to your domain registrar's DNS settings.**
2. **Add a TXT record with the following details:**
   - **Name/Host/Alias:** `_dmarc`
   - **Value:** `v=DMARC1; p=none; rua=mailto:postmaster@yourdomain.com; ruf=mailto:postmaster@yourdomain.com; sp=none; aspf=r;`
3. **Save the changes.**

#### Step 4: Verify DNS Changes

1. **Use a DNS lookup tool (like MXToolbox) to verify that the SPF, DKIM, and DMARC records are correctly set.**
2. **Wait for DNS propagation, which can take up to 48 hours.**

#### Step 5: Send Test Email

1. **Send a test email to a service like [Mail Tester](https://www.mail-tester.com/).**
2. **Check the results to ensure that SPF, DKIM, and DMARC are correctly configured.**
