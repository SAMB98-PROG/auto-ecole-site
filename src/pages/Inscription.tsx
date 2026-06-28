import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { useSearchParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Upload, CheckCircle2, User, FileText, ArrowRight, BookOpen, Clock, Heart } from 'lucide-react';

interface InscriptionFormData {
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  profession: string;
  selectedCategory: string;
}

export const Inscription: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState('');
  
  // Custom states for drag and drop files
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);
  
  const [isPhotoDragging, setIsPhotoDragging] = useState(false);
  const [isIdDragging, setIsIdDragging] = useState(false);

  // Read query params if any
  const defaultCategory = searchParams.get('formation') || searchParams.get('pack') || 'permis-b';

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InscriptionFormData>({
    defaultValues: {
      selectedCategory: defaultCategory,
      gender: 'M',
    }
  });

  // Ensure form gets updated if query params change after load
  useEffect(() => {
    if (defaultCategory) {
      setValue('selectedCategory', defaultCategory);
    }
  }, [defaultCategory, setValue]);

  // Handle Photo Drag events
  const handlePhotoDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsPhotoDragging(true);
  };

  const handlePhotoDragLeave = () => {
    setIsPhotoDragging(false);
  };

  const handlePhotoDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsPhotoDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPhotoFile(e.dataTransfer.files[0]);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  // Handle ID Drag events
  const handleIdDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsIdDragging(true);
  };

  const handleIdDragLeave = () => {
    setIsIdDragging(false);
  };

  const handleIdDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsIdDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setIdFile(e.dataTransfer.files[0]);
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdFile(e.target.files[0]);
    }
  };

  const onSubmit = async (data: InscriptionFormData) => {
    // Simulate server upload delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const uniqueRegId = 'AE-' + Math.floor(100000 + Math.random() * 900000);
    setRegistrationId(uniqueRegId);

    const submissionData = {
      ...data,
      registrationId: uniqueRegId,
      photoName: photoFile ? photoFile.name : 'Non fournie',
      idFileName: idFile ? idFile.name : 'Non fournie',
      date: new Date().toLocaleDateString('fr-FR'),
    };

    // Store in localStorage for student area view simulation
    const existingRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    existingRegistrations.push(submissionData);
    localStorage.setItem('registrations', JSON.stringify(existingRegistrations));

    setIsSubmitted(true);
    reset();
    setPhotoFile(null);
    setIdFile(null);
  };

  return (
    <div className="pt-20">
      <PageHeader
        title="Inscription en Ligne"
        subtitle="Remplissez notre formulaire d'inscription officielle pour réserver votre formation et planifier vos premières heures de code."
        badge="Espace Candidat"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {isSubmitted ? (
          <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-neutral-800 p-8 md:p-12 shadow-lg text-center flex flex-col items-center justify-center">
            <div className="p-5 bg-emerald-500/10 text-emerald-500 rounded-full mb-6 relative">
              <CheckCircle2 size={56} />
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 animate-ping" />
            </div>

            <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest font-mono">Dossier reçu !</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white uppercase mt-2">
              Félicitations, votre inscription est enregistrée !
            </h2>

            {/* Registration Code Badge */}
            <div className="my-6 px-6 py-3 bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 rounded-2xl">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Numéro de dossier candidat</p>
              <p className="text-2xl font-black text-brand-red tracking-widest mt-1 font-mono">{registrationId}</p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xl leading-relaxed">
              Votre dossier de pré-inscription en ligne a bien été transmis aux moniteurs d'**Auto-École Ndiouck - Dickel** à Mbacké. Un SMS de confirmation et un appel de notre secrétariat vous seront adressés sous 24 heures pour finaliser votre dossier physique et fixer vos premiers rendez-vous.
            </p>

            <div className="mt-8 p-6 bg-brand-yellow/10 border border-brand-yellow/20 rounded-2xl text-left max-w-lg">
              <h4 className="text-brand-yellow-dark font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen size={14} />
                Pièces à ramener lors du 1er cours :
              </h4>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
                <li>• Copie de votre pièce d'identité originale</li>
                <li>• Certificat médical d'aptitude à la conduite (visite médicale)</li>
                <li>• 4 photos d'identité récentes</li>
                <li>• Votre premier versement (ou acompte convenu)</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-brand-black hover:bg-neutral-900 text-white dark:bg-white dark:text-brand-black dark:hover:bg-neutral-100 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Retour à l'accueil
              </Link>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-800 dark:text-gray-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Inscrire un autre élève
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-neutral-800 p-8 shadow-sm">
            
            <div className="mb-8 border-b border-gray-100 dark:border-neutral-800 pb-5">
              <h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white">Formulaire d'Inscription Candidat</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Tous les champs marqués d'une astérisque (<span className="text-brand-red">*</span>) sont requis pour la constitution de votre dossier officiel d'examen.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Section 1: Civil State */}
              <div className="space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-red border-l-2 border-brand-red pl-2.5">
                  1. État Civil & Identité
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Nom <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Nom requis' })}
                      placeholder="Ex: Ndiaye"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                    />
                    {errors.lastName && <p className="text-brand-red text-xs mt-1 font-semibold">{errors.lastName.message}</p>}
                  </div>

                  {/* Prénom */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Prénom <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'Prénom requis' })}
                      placeholder="Ex: Modou"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                    />
                    {errors.firstName && <p className="text-brand-red text-xs mt-1 font-semibold">{errors.firstName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Date de Naissance */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Date de Naissance <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="date"
                      {...register('birthDate', { required: 'Date de naissance requise' })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-800 dark:text-gray-200"
                    />
                    {errors.birthDate && <p className="text-brand-red text-xs mt-1 font-semibold">{errors.birthDate.message}</p>}
                  </div>

                  {/* Sexe */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Sexe / Genre <span className="text-brand-red">*</span>
                    </label>
                    <div className="flex items-center gap-6 py-3">
                      <label className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 cursor-pointer">
                        <input
                          type="radio"
                          value="M"
                          {...register('gender')}
                          className="text-brand-red focus:ring-brand-red"
                        />
                        <span>Homme (M)</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 cursor-pointer">
                        <input
                          type="radio"
                          value="F"
                          {...register('gender')}
                          className="text-brand-red focus:ring-brand-red"
                        />
                        <span>Femme (F)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Contact Details */}
              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-neutral-800/60">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-red border-l-2 border-brand-red pl-2.5">
                  2. Coordonnées & Adresse
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Téléphone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Téléphone <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register('phone', {
                        required: 'Téléphone requis',
                        pattern: {
                          value: /^(77|78|76|70|33)[0-9]{7}$/,
                          message: 'Numéro sénégalais invalide (ex: 771234567)'
                        }
                      })}
                      placeholder="Ex: 775191212"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                    />
                    {errors.phone && <p className="text-brand-red text-xs mt-1 font-semibold">{errors.phone.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Email <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email requis' })}
                      placeholder="Ex: modou.ndiaye@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                    />
                    {errors.email && <p className="text-brand-red text-xs mt-1 font-semibold">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Adresse */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Adresse Résidence <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('address', { required: 'Adresse requise' })}
                      placeholder="Ex: Mbacké Escale"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                    />
                    {errors.address && <p className="text-brand-red text-xs mt-1 font-semibold">{errors.address.message}</p>}
                  </div>

                  {/* Profession */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Profession <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('profession', { required: 'Profession requise' })}
                      placeholder="Ex: Enseignant, Commerçant..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-900 dark:text-white"
                    />
                    {errors.profession && <p className="text-brand-red text-xs mt-1 font-semibold">{errors.profession.message}</p>}
                  </div>
                </div>
              </div>

              {/* Section 3: Training Course */}
              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-neutral-800/60">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-red border-l-2 border-brand-red pl-2.5">
                  3. Choix du Permis de Conduire
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    Catégorie de formation sélectionnée <span className="text-brand-red">*</span>
                  </label>
                  <select
                    {...register('selectedCategory', { required: 'Veuillez choisir votre permis' })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-red text-gray-800 dark:text-gray-200 font-medium"
                  >
                    <option value="permis-b">Permis B (Véhicules Légers) - 130 000 FCFA</option>
                    <option value="permis-a">Permis A (Moto & Scooter) - 75 000 FCFA</option>
                    <option value="permis-c">Permis C (Poids Lourds) - 250 000 FCFA</option>
                    <option value="code-route">Cours de Code de la route - 35 000 FCFA</option>
                    <option value="perfectionnement">Séance de Perfectionnement (à l'heure) - 10 000 FCFA</option>
                    <option value="pack-excellence">Pack Excellence Conduite - 155 000 FCFA</option>
                    <option value="pack-pro">Pack Double Permis A & B - 185 000 FCFA</option>
                  </select>
                </div>
              </div>

              {/* Section 4: File Upload (Drag and Drop / Usability mandate) */}
              <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-neutral-800/60">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-red border-l-2 border-brand-red pl-2.5">
                  4. Pièces Justificatives (Numériques)
                </h4>
                <p className="text-[11px] text-gray-500">
                  Déposez vos fichiers par drag-and-drop ou cliquez pour sélectionner manuellement depuis votre appareil. formats acceptés : JPG, PNG, PDF.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Photo d'identité Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Photo d'identité Candidat
                    </label>
                    <div
                      onDragOver={handlePhotoDragOver}
                      onDragLeave={handlePhotoDragLeave}
                      onDrop={handlePhotoDrop}
                      className={`h-40 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 transition-all relative cursor-pointer ${
                        isPhotoDragging
                          ? 'border-brand-red bg-brand-red/5'
                          : photoFile
                          ? 'border-emerald-500 bg-emerald-500/5'
                          : 'border-gray-200 dark:border-neutral-800 hover:border-brand-red bg-gray-50/50 dark:bg-neutral-950/40'
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                      {photoFile ? (
                        <div className="text-center">
                          <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-full w-fit mx-auto mb-2">
                            <CheckCircle2 size={24} />
                          </div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white max-w-[200px] truncate">
                            {photoFile.name}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            {(photoFile.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload size={24} className="text-gray-400 mx-auto mb-2" />
                          <p className="text-xs font-bold text-gray-800 dark:text-gray-200">Déposer ou cliquer</p>
                          <p className="text-[10px] text-gray-400 mt-1">Photo d'identité carrée</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pièce d'identité Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Pièce d'identité (CNI / Passeport)
                    </label>
                    <div
                      onDragOver={handleIdDragOver}
                      onDragLeave={handleIdDragLeave}
                      onDrop={handleIdDrop}
                      className={`h-40 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 transition-all relative cursor-pointer ${
                        isIdDragging
                          ? 'border-brand-red bg-brand-red/5'
                          : idFile
                          ? 'border-emerald-500 bg-emerald-500/5'
                          : 'border-gray-200 dark:border-neutral-800 hover:border-brand-red bg-gray-50/50 dark:bg-neutral-950/40'
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleIdChange}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                      {idFile ? (
                        <div className="text-center">
                          <div className="p-2.5 bg-emerald-500/10 text-emerald-500 rounded-full w-fit mx-auto mb-2">
                            <CheckCircle2 size={24} />
                          </div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white max-w-[200px] truncate">
                            {idFile.name}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            {(idFile.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload size={24} className="text-gray-400 mx-auto mb-2" />
                          <p className="text-xs font-bold text-gray-800 dark:text-gray-200">Déposer ou cliquer</p>
                          <p className="text-[10px] text-gray-400 mt-1">Format PDF ou image</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit block */}
              <div className="pt-6 border-t border-gray-100 dark:border-neutral-800/60 flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-red hover:bg-brand-red-dark disabled:bg-neutral-400 text-white font-extrabold uppercase text-sm tracking-wide rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? 'Soumission du dossier...' : 'Soumettre ma pré-inscription'}
                  <ArrowRight size={18} />
                </button>
                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  En soumettant ce formulaire, vous acceptez qu'Auto-École Ndiouck - Dickel traite vos données à des fins d'inscription administrative nationale conformément à la législation sur la protection des données personnelles.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
