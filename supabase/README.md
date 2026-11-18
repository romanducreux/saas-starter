# Espace client Kirevo

## Mise en service

1. Créer un projet Supabase dans une région européenne.
2. Exécuter `migrations/20261118000000_client_portal.sql` dans l’éditeur SQL.
3. Configurer les URL d’authentification :
   - Site URL : `https://www.kirevo.fr`
   - Redirect URLs : `https://www.kirevo.fr/auth/callback` et `http://localhost:3000/auth/callback`
4. Ajouter les variables du fichier `.env.example` dans Vercel et dans `.env.local`.
5. Conserver la confirmation d’adresse e-mail activée.
6. Brancher un SMTP de production avant l’ouverture publique des inscriptions.

La clé secrète Supabase ne doit jamais être préfixée par `NEXT_PUBLIC_` ni placée dans le navigateur.
